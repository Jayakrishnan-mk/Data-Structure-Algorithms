// k'th Largest Element In A Stream

// size, top(minimal value in heap), push, pop, swap - operations

class KthLargest {
    constructor(k, nums) {
        this.k = k;
        this.minHeap = new MinHeap(); // Custom Min Heap implementation

        for (let num of nums) {
            this.add(num);
        }
    }

    add(val) {
        this.minHeap.push(val);

        // Keep only 'k' largest elements in the heap
        if (this.minHeap.size() > this.k) {
            this.minHeap.pop();  // Remove the smallest element
        }

        return this.minHeap.top(); // Return Kth largest element (smallest in the heap)
    }
}

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
        return this.heap[0]; // top value / smallest value in this heap.
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

const kthLargest = new KthLargest(3, [4, 5, 8, 2]);
console.log(kthLargest.add(3));  // returns 4
console.log(kthLargest.add(5));  // returns 5
console.log(kthLargest.add(10)); // returns 5
console.log(kthLargest.add(9));  // returns 8
console.log(kthLargest.add(4));  // returns 8
