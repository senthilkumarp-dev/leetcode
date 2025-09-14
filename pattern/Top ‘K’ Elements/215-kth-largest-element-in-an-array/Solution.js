class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this._bubbleUp();
    }

    pop() {
        const min = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this._sinkDown(0);
        }
        return min;
    }

    peek() {
        return this.heap[0];
    }

    _bubbleUp() {
        let idx = this.heap.length - 1;
        const element = this.heap[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.heap[parentIdx];
            if (element >= parent) break;
            this.heap[parentIdx] = element;
            this.heap[idx] = parent;
            idx = parentIdx;
        }
    }

    _sinkDown(idx) {
        const length = this.heap.length;
        const element = this.heap[idx];

        while (true) {
            let leftIdx = 2 * idx + 1;
            let rightIdx = 2 * idx + 2;
            let swap = null;

            if (leftIdx < length) {
                if (this.heap[leftIdx] < element) {
                    swap = leftIdx;
                }
            }

            if (rightIdx < length) {
                if ((swap === null && this.heap[rightIdx] < element) ||
                    (swap !== null && this.heap[rightIdx] < this.heap[leftIdx])) {
                    swap = rightIdx;
                }
            }

            if (swap === null) break;

            this.heap[idx] = this.heap[swap];
            this.heap[swap] = element;
            idx = swap;
        }
    }
}

var findKthLargest = function(nums, k) {
    const heap = new MinHeap();

    for (let i = 0; i < k; i++) {
        heap.push(nums[i]);
    }

    for (let i = k; i < nums.length; i++) {
        if (nums[i] > heap.peek()) {
            heap.pop();
            heap.push(nums[i]);
        }
    }

    return heap.peek();
};

