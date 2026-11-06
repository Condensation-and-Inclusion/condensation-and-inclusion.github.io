// Return samples in request order, even when workers finish in another order.
// Choosing the first completed sample could select paths by calculation cost.
export class SampleQueue {
  constructor() { this.samples = new Map(); this.expected = 0; }
  get length() { return this.samples.size; }
  get ready() { return this.samples.has(this.expected); }
  add(sample) {
    if (!Number.isInteger(sample.index) || sample.index < this.expected || this.samples.has(sample.index)) throw new Error('Invalid sample index.');
    this.samples.set(sample.index, sample);
  }
  take() {
    if (!this.ready) return null;
    const sample = this.samples.get(this.expected);
    this.samples.delete(this.expected++);
    return sample;
  }
}
