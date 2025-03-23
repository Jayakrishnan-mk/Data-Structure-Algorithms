
// k'th largest element in an array - leetcode - medium


var findKthLargest = function (nums, k) {

    let minHeap = new MinHeap();

    for (let num of nums) {
        minHeap.push(num);
        if (minHeap.size() > k) {
            minHeap.pop();
        }
    }
    return minHeap.top();
};


// Min Heap (Priority Queue) Implementation
class MinHeap {
    constructor() {
        this.heap = [];
    }
    // size, top(minimal value in heap), push, pop - operations

    size() {
        return this.heap.length; // heap size.
    }

    top() {
        return this.heap.length > 0 ? this.heap[0] : null; // top value / smallest value in this heap.
    }

    push(val) {
        this.heap.push(val);
        this._heapifyUp() // bubble up operation....
    }

    _heapifyUp() {
        let length = this.heap.length;
        let idx = length - 1;

        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            if (this.heap[idx] >= this.heap[parentIdx]) break;
            this._swap(idx, parentIdx);
            idx = parentIdx;
        }
    }

    _swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }

    pop() {  // popping means, removing the top item of the heap.
        if (this.heap.length <= 0) {
            return null;
        }
        this._swap(0, this.heap.length - 1);
        let popped = this.heap.pop();

        this._heapifyDown();
        return popped;
    }

    _heapifyDown() {
        let idx = 0;
        let length = this.heap.length;
        while (true) {
            let left = 2 * idx + 1;
            let right = 2 * idx + 2;
            let smallest = idx;

            if (left < length && this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }
            if (right < length && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }

            if (smallest === idx) break; // means, if there is no swap, then.

            this._swap(idx, smallest);
            idx = smallest;
        }
    }

}
