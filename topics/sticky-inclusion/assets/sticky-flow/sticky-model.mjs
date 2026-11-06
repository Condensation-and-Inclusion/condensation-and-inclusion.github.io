import { Random, mod } from './model.mjs';

// Johnk's rejection sampler, evaluated in logarithmic coordinates.
// 'right' identifies the larger share; 'small' is the smaller share.
export function betaSplit(shape, random) {
  for (;;) {
    const u = Math.log(random.uniform()) / shape;
    const v = Math.log(random.uniform()) / shape;
    const difference = Math.abs(u - v);
    if (Math.max(u, v) + Math.log1p(Math.exp(-difference)) > 0) continue;
    return { right:u >= v, small:1 / (1 + Math.exp(difference)) };
  }
}

// The absolute Beta logit has density proportional to
// exp(-shape*y) * (1 + exp(-y))^(-2*shape), y >= 0.
// Exponential proposals allow an accepted clipped tail to be selected
// without evaluating its logarithm. The returned bound covers that tail.
export function roundedBetaSplit(node, shape, random, cutoff, result = {}) {
  if (node.mass <= 2 * cutoff) {
    result.right = random.uniform() >= .5;
    result.small = 0; result.bound = node.mass / 2;
    return result;
  }
  if (!node.cutInfo) {
    const ratio = cutoff / node.mass;
    node.cutInfo = cutoff === 0 ? { tail:0, acceptTail:1 } : {
      tail:Math.exp(-shape * Math.log((1 - ratio) / ratio)),
      acceptTail:Math.exp(2 * shape * Math.log1p(-ratio)),
    };
  }
  for (;;) {
    const signAndUniform = random.uniform();
    const right = signAndUniform >= .5;
    const u = right ? 2 * signAndUniform - 1 : 2 * signAndUniform;
    const v = random.uniform();
    if (u < node.cutInfo.tail && v <= node.cutInfo.acceptTail) {
      result.right = right; result.small = 0; result.bound = cutoff;
      return result;
    }
    const y = -Math.log(u) / shape;
    if (v > Math.exp(-2 * shape * Math.log1p(Math.exp(-y)))) continue;
    const small = 1 / (1 + Math.exp(y));
    const little = node.mass * small;
    result.right = right;
    result.small = little < cutoff ? 0 : small;
    result.bound = little < cutoff ? little : 0;
    return result;
  }
}

export class StickyGridFlow {
  constructor({ sites = 1024, alpha = 1, diffusion = 1, seed = 17, cutoff = 1e-14 } = {}) {
    if (!Number.isInteger(sites) || sites < 16 || sites > 2048) throw new Error('Use 16 to 2048 grid points.');
    if (!(alpha > 0) || !Number.isFinite(alpha) || !(diffusion > 0) || !Number.isFinite(diffusion)) throw new Error('Use positive model parameters.');
    if (!(cutoff >= 0 && cutoff <= 1e-8)) throw new Error('Invalid mass cutoff.');
    this.sites = sites;
    this.period = 2 * sites;
    this.alpha = alpha;
    this.diffusion = diffusion;
    this.shape = alpha / (2 * sites);
    this.rate = 8 * diffusion * sites ** 2;
    this.cutoff = cutoff;
    this.random = new Random(seed);
    this.time = 0;
    this.steps = 0;
    this.pending = null;
    this.pruned = 0;
    this.rows = 0;
    this.splitResult = {};
    this.active = [];
    this.spareActive = [];
    this.nodes = Array(this.period).fill(null);
    this.spare = Array(this.period).fill(null);
    for (let j = 0; j < sites; j++) {
      this.active.push(2 * j);
      this.nodes[2 * j] = { mass:1 / sites, key:2 * j, roots:null };
    }
  }
  schedule() {
    if (this.pending === null) this.pending = this.time - Math.log(this.random.uniform()) / this.rate;
  }
  add(site, mass, node, share, winding, nextActive) {
    if (mass === 0) return;
    let target = this.spare[site];
    if (!node.roots) {
      const key = node.key + winding;
      if (!target) {
        this.spare[site] = { mass, key, roots:null };
        nextActive.push(site);
      } else {
        target.cutInfo = null;
        if (target.roots) target.roots.set(key, (target.roots.get(key) || 0) + mass);
        else if (target.key !== key) target.roots = new Map([[target.key, target.mass], [key, mass]]);
        target.mass += mass;
      }
      return;
    }
    if (!target) {
      target = this.spare[site] = { mass:0, key:0, roots:new Map() };
      nextActive.push(site);
    } else if (!target.roots) target.roots = new Map([[target.key, target.mass]]);
    target.mass += mass;
    target.cutInfo = null;
    for (const [key, value] of node.roots) {
      const k = key + winding;
      target.roots.set(k, (target.roots.get(k) || 0) + value * share);
    }
  }
  step() {
    this.schedule();
    const nextActive = this.spareActive, next = this.spare, period = this.period;
    nextActive.length = 0;
    for (const x of this.active) {
      const node = this.nodes[x];
      const { right, small, bound } = roundedBetaSplit(node, this.shape, this.random, this.cutoff, this.splitResult);
      this.rows++;
      this.pruned += bound;
      const little = node.mass * small;
      const fraction = small;
      const main = node.mass - little;
      const plus = x === period - 1 ? 0 : x + 1;
      const minus = x === 0 ? period - 1 : x - 1;
      if (little === 0) {
        const destination = right ? plus : minus;
        const winding = right ? (x === period - 1 ? period : 0) : (x === 0 ? -period : 0);
        if (!next[destination]) {
          if (winding) {
            if (node.roots) node.roots = new Map([...node.roots].map(([key, value]) => [key + winding, value]));
            else node.key += winding;
          }
          next[destination] = node;
          nextActive.push(destination);
        } else this.add(destination, node.mass, node, 1, winding, nextActive);
      } else if (right) {
        this.add(plus, main, node, 1 - fraction, x === period - 1 ? period : 0, nextActive);
        this.add(minus, little, node, fraction, x === 0 ? -period : 0, nextActive);
      } else {
        this.add(minus, main, node, 1 - fraction, x === 0 ? -period : 0, nextActive);
        this.add(plus, little, node, fraction, x === period - 1 ? period : 0, nextActive);
      }
      this.nodes[x] = null;
    }
    this.spare = this.nodes;
    this.nodes = next;
    this.spareActive = this.active;
    this.active = nextActive;
    this.time = this.pending;
    this.pending = null;
    this.steps++;
  }
  advanceTo(target, budget = Infinity) {
    if (!Number.isFinite(target) || target < this.time) throw new Error('Time must increase.');
    let used = 0;
    for (;;) {
      this.schedule();
      if (this.pending > target) { this.time = target; return true; }
      if (used >= budget) return false;
      this.step(); used++;
    }
  }
  observe(includeMass = true) {
    const mass = includeMass ? new Float64Array(this.period) : null;
    const flow = [];
    let largest = 0, visible = 0, total = 0;
    for (const x of this.active) {
      const node = this.nodes[x];
      if (mass) mass[x] = node.mass;
      total += node.mass;
      largest = Math.max(largest, node.mass);
      if (node.mass >= 1e-6) visible++;
      for (const [key, weight] of node.roots || [[node.key, node.mass]]) {
        const source = mod(key, this.period);
        const winding = (key - source) / this.period;
        if (weight > 0) flow.push(source, x + winding * this.period - source, weight);
      }
      // Display ancestry is reset at an observation. The mass process is unchanged.
      node.roots = null;
      node.key = x;
    }
    return { mass, flow:Float64Array.from(flow), largest, visible, total,
      steps:this.steps, rows:this.rows, pruned:this.pruned };
  }
}
