class MaxHeap {
  constructor() {
    this.data = [];
  }
  push(val) {
    this.data.push(val);
    this.bubbleUp();
  }
  pop() {
    if (this.data.length === 0) return null;
    const max = this.data[0];
    const end = this.data.pop();
    if (this.data.length > 0) {
      this.data[0] = end;
      this.bubbleDown();
    }
    return max;
  }
  bubbleUp() {
    let idx = this.data.length - 1;
    while (idx > 0) {
      let parent = Math.floor((idx - 1) / 2);
      if (this.data[idx] <= this.data[parent]) break;
      [this.data[idx], this.data[parent]] = [this.data[parent], this.data[idx]];
      idx = parent;
    }
  }
  bubbleDown() {
    let idx = 0;
    const length = this.data.length;
    const element = this.data[0];
    while (true) {
      let left = 2 * idx + 1;
      let right = 2 * idx + 2;
      let swap = null;

      if (left < length && this.data[left] > element) swap = left;
      if (right < length && this.data[right] > (swap === null ? element : this.data[left])) swap = right;
      if (swap === null) break;
      [this.data[idx], this.data[swap]] = [this.data[swap], this.data[idx]];
      idx = swap;
    }
  }
}