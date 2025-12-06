/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  class MaxHeap {
    // compare(a, b) > 0 => a is "larger"/higher priority than b
    constructor(compare) {
      this.data = [];
      this.compare = compare;
    }

    size() {
      return this.data.length;
    }

    push(val) {
      this.data.push(val);
      this.bubbleUp();
    }

    pop() {
      if (this.data.length === 0) return null;
      const top = this.data[0];
      const end = this.data.pop();
      if (this.data.length > 0) {
        this.data[0] = end;
        this.bubbleDown();
      }
      return top;
    }

    bubbleUp() {
      let idx = this.data.length - 1;
      while (idx > 0) {
        const parent = Math.floor((idx - 1) / 2);
        // if current <= parent, stop
        if (this.compare(this.data[idx], this.data[parent]) <= 0) break;
        [this.data[idx], this.data[parent]] = [
          this.data[parent],
          this.data[idx],
        ];
        idx = parent;
      }
    }

    bubbleDown() {
      let idx = 0;
      const n = this.data.length;
      while (true) {
        const left = 2 * idx + 1;
        const right = 2 * idx + 2;
        let largest = idx;

        if (left < n && this.compare(this.data[left], this.data[largest]) > 0) {
          largest = left;
        }
        if (
          right < n &&
          this.compare(this.data[right], this.data[largest]) > 0
        ) {
          largest = right;
        }

        if (largest === idx) break;

        [this.data[idx], this.data[largest]] = [
          this.data[largest],
          this.data[idx],
        ];
        idx = largest;
      }
    }
  }

  let map = new Map();
  let maxHeap = new MaxHeap((a, b) => {
    let diff = map.get(a) - map.get(b); // stronger → positive
    if (diff !== 0) return diff;
    return a - b; // larger index → stronger
  });
  for (let i = 0; i < mat.length; i++) {
    let soldiers = 0;
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 1) soldiers++;
    }
    map.set(i, soldiers);
    maxHeap.push(i);
    if (maxHeap.size() > k) {
      maxHeap.pop();
    }
  }
  let ans = [];
  for (let i = 0; i < k; i++) {
    ans.unshift(maxHeap.pop());
  }
  return ans;
};
