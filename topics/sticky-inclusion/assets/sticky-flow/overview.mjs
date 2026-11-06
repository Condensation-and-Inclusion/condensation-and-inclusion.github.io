import { BlackTrajectories } from './trajectories.mjs';
import { SampleQueue } from './sample-queue.mjs';

// Settings read from the local prototype before removing its controls.
const parameters = Object.freeze({ sites:1024, alpha:1, diffusion:1, seed:'17' });
const duration = .3;
const passMilliseconds = 9000;
const columns = 2400;
const startupColumns = 24;
const canvas = document.getElementById('sticky-flow');
const plot = new BlackTrajectories(canvas, 6);
const queue = new SampleQueue();
const jobs = [];
const usedSeeds = new Set([parameters.seed]);
const poolSize = Math.min(4, Math.max(1, (navigator.hardwareConcurrency || 4) - 2));
let current = null, runNumber = 0, elapsed = 0, previousStamp = null, stopped = false;

function freshSeed() {
  let seed;
  do { seed = String(crypto.getRandomValues(new Uint32Array(1))[0]); } while (usedSeeds.has(seed));
  usedSeeds.add(seed); return seed;
}
function prepare() {
  if (stopped) return;
  for (const job of jobs) {
    if (job.busy) continue;
    if (queue.length + jobs.filter(j => j.busy).length >= poolSize + 1) break;
    job.busy = true; job.index = runNumber;
    job.seed = runNumber++ === 0 ? parameters.seed : freshSeed();
    job.worker.postMessage({ type:'reset', parameters:{ ...parameters, seed:job.seed } });
    // Give the first sample the full calculation budget until it is ready.
    if (job.index === 0) break;
  }
}
function startSample(sample) {
  current = sample; elapsed = 0; previousStamp = null;
  plot.setSample(current);
  canvas.dataset.state = 'running';
  canvas.dataset.seed = current.seed;
  canvas.dataset.time = '0';
}
function fail(message) {
  stopped = true;
  for (const job of jobs) job.worker.terminate();
  canvas.dataset.state = 'error';
  console.error('Sticky-flow simulation:', message);
}
canvas.dataset.state = 'preparing';
for (let k = 0; k < poolSize; k++) {
  const job = { worker:new Worker(new URL('./sticky-worker.mjs', import.meta.url), { type:'module' }), busy:false, building:null };
  jobs.push(job);
  job.worker.onmessage = ({ data:message }) => {
    if (stopped) return;
    if (message.type === 'ready') {
      job.worker.postMessage({ type:'window', duration, columns, includeMass:false });
    } else if (message.type === 'begin') {
      job.building = { ...message, seed:job.seed, index:job.index, occupancy:message.first.mass, flows:Array(columns + 1), availableColumns:0 };
      job.building.flows[0] = message.first.flow;
      if (!current && job.index === 0) plot.setSample(job.building);
    } else if (message.type === 'sample') {
      job.building.flows[message.column] = message.flow;
      job.building.availableColumns = message.column;
      if (job.index === 0 && message.column === startupColumns) {
        queue.add(job.building);
        startSample(queue.take());
      }
    } else if (message.type === 'complete') {
      if (job.building !== current) queue.add(job.building);
      job.building = null; job.busy = false;
      if (queue.ready && (!current || elapsed >= passMilliseconds)) startSample(queue.take());
      prepare();
    } else if (message.type === 'error') fail(message.message);
  };
  job.worker.onerror = error => fail(error.message || 'Could not load the sampler.');
}
function frame(stamp) {
  if (stopped) return;
  if (current && !document.hidden) {
    if (previousStamp !== null) {
      const availableTime = passMilliseconds * current.availableColumns / current.columns;
      elapsed = Math.min(availableTime, elapsed + stamp - previousStamp);
    }
    const column = Math.min(current.availableColumns, Math.floor(elapsed / passMilliseconds * current.columns));
    if (column !== plot.column) {
      plot.reveal(column);
      canvas.dataset.time = String(duration * column / columns);
    }
    if (elapsed >= passMilliseconds) {
      if (queue.ready) { startSample(queue.take()); prepare(); }
      else canvas.dataset.state = 'preparing';
    }
  }
  previousStamp = !document.hidden ? stamp : null;
  requestAnimationFrame(frame);
}
document.addEventListener('visibilitychange', () => { previousStamp = null; });
window.addEventListener('pagehide', () => {
  stopped = true;
  for (const job of jobs) job.worker.terminate();
});
window.addEventListener('pageshow', event => { if (event.persisted) window.location.reload(); });
prepare(); requestAnimationFrame(frame);
