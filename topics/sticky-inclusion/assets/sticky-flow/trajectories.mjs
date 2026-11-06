import { torusSegments } from './model.mjs';

// Only trajectories are painted. The canvas has no axes, frame, or time marker.
export class BlackTrajectories {
  constructor(canvas, massWidth = 6) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.massWidth = massWidth;
    this.sample = null;
    this.column = 0;
    this.observer = new ResizeObserver(() => this.resize());
    this.observer.observe(canvas);
    this.resize();
  }
  resize() {
    this.width = this.canvas.clientWidth;
    this.height = this.canvas.clientHeight;
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    this.canvas.width = Math.round(this.width * ratio);
    this.canvas.height = Math.round(this.height * ratio);
    this.context.setTransform(ratio, 0, 0, ratio, 0, 0);
    if (this.sample) {
      if (this.column) this.draw(0, this.column);
      else this.initialMass();
    }
  }
  setSample(sample) {
    this.sample = sample;
    this.column = 0;
    this.context.clearRect(0, 0, this.width, this.height);
    this.initialMass();
  }
  initialMass() {
    const context = this.context, { L, occupancy } = this.sample;
    context.fillStyle = '#000000';
    for (let x = 0; x < L; x++) {
      if (!occupancy[x]) continue;
      const width = this.massWidth * occupancy[x];
      context.fillRect(0, (1 - (x + .5) / L) * this.height - width / 2, 1, width);
    }
  }
  reveal(column) {
    column = Math.max(this.column, Math.min(this.sample.columns, column));
    this.draw(this.column, column);
    this.column = column;
  }
  draw(first, last) {
    const { flows, L, columns } = this.sample;
    const context = this.context;
    context.strokeStyle = '#000000';
    context.lineCap = 'butt';
    for (let i = first; i < last; i++) {
      const packed = flows[i + 1];
      for (let j = 0; j < packed.length; j += 3) {
        context.lineWidth = this.massWidth * packed[j + 2];
        context.beginPath();
        for (const [u, y, v, yy] of torusSegments(packed[j], packed[j + 1], L)) {
          for (const shift of [-this.height, 0, this.height]) {
            context.moveTo((i + u) / columns * this.width, (1 - y / L) * this.height + shift);
            context.lineTo((i + v) / columns * this.width, (1 - yy / L) * this.height + shift);
          }
        }
        context.stroke();
      }
    }
  }
}
