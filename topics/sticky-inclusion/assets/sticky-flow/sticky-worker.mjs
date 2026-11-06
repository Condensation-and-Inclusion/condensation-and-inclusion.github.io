import { StickyGridFlow } from './sticky-model.mjs';
let model, busy = false, paused = false, resume = null, windowNumber = 0;
async function waitIfPaused() { if (paused) await new Promise(resolve => { resume = resolve; }); }
self.onmessage = async ({ data }) => {
  try {
    if (data.type === 'pause') { paused = true; return; }
    if (data.type === 'play') { paused = false; if (resume) { resume(); resume = null; } return; }
    if (data.type === 'reset') {
      if (busy) throw new Error('Start a new worker before a reset.');
      model = new StickyGridFlow(data.parameters); windowNumber = 0;
      self.postMessage({ type:'ready', L:model.period, sites:model.sites, rate:model.rate });
      return;
    }
    if (data.type !== 'window' || busy || !model) return;
    if (!(data.duration > 0 && data.duration <= 10) || !Number.isInteger(data.columns) || data.columns < 1 || data.columns > 16000) throw new Error('Invalid time window.');
    busy = true;
    const start = model.time, end = start + data.duration, columns = data.columns;
    windowNumber++;
    const first = model.observe();
    self.postMessage({ type:'begin', start, end, columns, L:model.period, N:1, kind:'sticky', windowNumber, first });
    let lastYield = performance.now();
    for (let i = 1; i <= columns; i++) {
      await waitIfPaused();
      const target = i === columns ? end : start + data.duration * i / columns;
      while (!model.advanceTo(target, 1024)) {
        if (performance.now() - lastYield > 50) {
          self.postMessage({ type:'progress', fraction:(i - 1) / columns, steps:model.steps });
          await new Promise(resolve => setTimeout(resolve, 0));
          await waitIfPaused(); lastYield = performance.now();
        }
      }
      const sample = model.observe(data.includeMass !== false);
      const transfers = [sample.flow.buffer];
      if (sample.mass) transfers.push(sample.mass.buffer);
      self.postMessage({ type:'sample', column:i, ...sample }, transfers);
      if (performance.now() - lastYield > 50) {
        await new Promise(resolve => setTimeout(resolve, 0));
        await waitIfPaused(); lastYield = performance.now();
      }
    }
    busy = false; self.postMessage({ type:'complete' });
  } catch (error) { busy = false; self.postMessage({ type:'error', message:error.message }); }
};
