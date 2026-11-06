// Exact finite-state inclusion process, up to floating-point arithmetic.
export const mod = (x, n) => ((x % n) + n) % n;

export class Random {
  constructor(seed = 17) {
    let h = 2166136261;
    for (const c of String(seed)) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
    this.state = h >>> 0;
  }
  uniform() {
    this.state = (this.state + 0x6d2b79f5) >>> 0;
    let z = this.state;
    z = Math.imul(z ^ (z >>> 15), z | 1);
    z ^= z + Math.imul(z ^ (z >>> 7), z | 61);
    return (((z ^ (z >>> 14)) >>> 0) + 0.5) / 4294967296;
  }
}

export class RateTree {
  constructor(size) {
    this.size = size;
    this.values = new Float64Array(size);
    this.tree = new Float64Array(size + 1);
    this.total = 0;
  }
  set(i, value) {
    const delta = value - this.values[i];
    this.values[i] = value;
    this.total += delta;
    for (let j = i + 1; j <= this.size; j += j & -j) this.tree[j] += delta;
  }
  choose(target) {
    let index = 0;
    let bit = 1;
    while (bit * 2 <= this.size) bit *= 2;
    for (; bit; bit >>= 1) {
      const next = index + bit;
      if (next <= this.size && this.tree[next] <= target) {
        target -= this.tree[next];
        index = next;
      }
    }
    return Math.min(index, this.size - 1);
  }
}

export class InclusionProcess {
  constructor({ sites = 32, particlesPerSite = 2, alpha = 1, seed = 17, counts = null } = {}) {
    if (!Number.isInteger(sites) || sites < 3 || sites > 2048) throw new Error('Use 3 to 2048 sites.');
    if (!Number.isFinite(alpha) || alpha <= 0) throw new Error('Use a positive value of alpha.');
    if (!counts) {
      if (!Number.isInteger(particlesPerSite) || particlesPerSite < 1) throw new Error('Use a positive integer particle count.');
      counts = Array(sites).fill(particlesPerSite);
    }
    if (counts.length !== sites || counts.some(x => !Number.isInteger(x) || x < 0)) throw new Error('Invalid initial counts.');
    const total = counts.reduce((a, b) => a + b, 0);
    if (total < 1 || total > 4096) throw new Error('Use 1 to 4096 particles.');
    this.L = sites;
    this.N = total;
    this.alpha = alpha;
    this.d = alpha / sites;
    this.clockScale = this.N ** 2 / this.d; // microscopic s = (N²/d)t
    this.random = new Random(seed);
    this.eta = Uint32Array.from(counts);
    this.members = Array.from({ length: sites }, () => []);
    this.positions = new Float64Array(this.N); // one lift per labelled particle
    let label = 0;
    for (let x = 0; x < sites; x++) {
      for (let k = 0; k < counts[x]; k++) {
        this.members[x].push(label);
        this.positions[label++] = x;
      }
    }
    this.time = 0;
    this.events = 0;
    this.pending = null;
    this.rebuildRates();
  }
  edgeRate(i) {
    const a = this.eta[i], b = this.eta[(i + 1) % this.L];
    return this.d * (a + b) + 2 * a * b;
  }
  rebuildRates() {
    this.rates = new RateTree(this.L);
    for (let i = 0; i < this.L; i++) this.rates.set(i, this.edgeRate(i));
  }
  schedule() {
    if (this.pending) return;
    const total = this.rates.total;
    if (!(total > 0) || !Number.isFinite(total)) throw new Error('Invalid total jump rate.');
    const time = this.time - Math.log(this.random.uniform()) / total;
    const edge = this.rates.choose(this.random.uniform() * total);
    const right = (edge + 1) % this.L;
    const forward = this.eta[edge] * (this.d + this.eta[right]);
    const direction = this.random.uniform() * this.rates.values[edge] < forward ? 1 : -1;
    const source = direction === 1 ? edge : right;
    const destination = direction === 1 ? right : edge;
    const slot = Math.floor(this.random.uniform() * this.members[source].length);
    this.pending = { time, edge, source, destination, direction, slot };
  }
  jump() {
    this.schedule();
    const e = this.pending;
    const source = this.members[e.source];
    const label = source[e.slot];
    e.label = label;
    source[e.slot] = source[source.length - 1];
    source.pop();
    this.members[e.destination].push(label);
    this.positions[label] += e.direction;
    this.eta[e.source]--;
    this.eta[e.destination]++;
    this.time = e.time;
    this.events++;
    this.pending = null;
    for (const i of [mod(e.edge - 1, this.L), e.edge, (e.edge + 1) % this.L]) {
      this.rates.set(i, this.edgeRate(i));
    }
    // Limit cancellation drift in the floating-point rate sums.
    if (this.events % 65536 === 0) this.rebuildRates();
    return e;
  }
  advanceTo(target, budget = Infinity) {
    if (!Number.isFinite(target) || target < this.time) throw new Error('Time must increase.');
    let used = 0;
    for (;;) {
      this.schedule();
      if (this.pending.time > target) {
        this.time = target;
        return true;
      }
      if (used >= budget) return false;
      this.jump();
      used++;
    }
  }
  stats() {
    let occupied = 0, largest = 0;
    for (const n of this.eta) {
      if (n) occupied++;
      largest = Math.max(largest, n);
    }
    return { occupied, largest, events: this.events, particles: this.N };
  }
}

// Lines between two observations retain the actual net winding of each label.
export function flowsBetween(before, after, L) {
  const groups = new Map();
  for (let i = 0; i < before.length; i++) {
    const site = mod(before[i], L);
    const delta = after[i] - before[i];
    const key = delta * L + site;
    const group = groups.get(key);
    if (group) group.mass++;
    else groups.set(key, { site, delta, mass: 1 });
  }
  return [...groups.values()];
}

export function torusSegments(site, delta, L) {
  const start = mod(site, L) + 0.5;
  const end = start + delta;
  const cuts = [0];
  if (delta > 0) {
    for (let edge = Math.ceil(start / L) * L; edge < end; edge += L) cuts.push((edge - start) / delta);
  } else if (delta < 0) {
    for (let edge = Math.floor(start / L) * L; edge > end; edge -= L) cuts.push((edge - start) / delta);
  }
  cuts.push(1);
  return cuts.slice(1).map((b, i) => {
    const a = cuts[i];
    const winding = Math.floor((start + delta * (a + b) / 2) / L);
    return [a, start + delta * a - winding * L, b, start + delta * b - winding * L];
  });
}
