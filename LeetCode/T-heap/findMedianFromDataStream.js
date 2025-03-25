
// find Median From Data Stream - leetcode - hard

var MedianFinder = function () {
    this.maxHeap = new MaxHeap(); // max heap for the smaller half
    this.minHeap = new MinHeap(); // min heap for the larger half
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
    let maxHeapRoot = this.maxHeap.top();

    if (this.maxHeap.size() === 0 || num <= maxHeapRoot) {
        this.maxHeap.push(num);
    } else {
        this.minHeap.push(num);
    }

    if (this.maxHeap.size() > this.minHeap.size() + 1) {
        this.minHeap.push(this.maxHeap.pop());
    }
    if (this.minHeap.size() > this.maxHeap.size()) {
        this.maxHeap.push(this.minHeap.pop());
    }

};

/**
 * @return {number}
*/
MedianFinder.prototype.findMedian = function () {
    if (this.maxHeap.size() === 0) return 0; // Handle edge case

    let minHeapLength = this.minHeap.size();
    let maxHeapLength = this.maxHeap.size();

    if (minHeapLength === maxHeapLength) {
        let minHeapRoot = this.minHeap.top();
        let maxHeapRoot = this.maxHeap.top();
        // if (minHeapRoot === null || maxHeapRoot === null) return null; // Safety check

        return (minHeapRoot + maxHeapRoot) / 2; // median
    }
    return this.maxHeap.top(); // The max heap will always have the extra element
};


class MinHeap {
    constructor() {
        this.heap = [];
    }

    top() {
        return this.heap[0] || null;
    }

    _swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    push(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    bubbleUp() { // [ 1  2  6  4  5  3 ]
        let idx = this.heap.length - 1;

        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);

            if (this.heap[idx] >= this.heap[parentIdx]) break;
            this._swap(idx, parentIdx);
            idx = parentIdx;
        }
    }

    pop() {
        this._swap(0, this.heap.length - 1);
        let popped = this.heap.pop();
        this.bubbleDown();
        return popped;
    }

    bubbleDown() { // [ 6  2  3  4  5  ]
        let idx = 0;
        let length = this.heap.length;

        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let smallest = idx;

            if (leftChildIdx < length && this.heap[leftChildIdx] < this.heap[smallest]) {
                smallest = leftChildIdx;
            }

            if (rightChildIdx < length && this.heap[rightChildIdx] < this.heap[smallest]) {
                smallest = rightChildIdx;
            }

            if (idx === smallest) break;
            this._swap(idx, smallest);
            idx = smallest;
        }
    }

    size() {
        return this.heap.length;
    }
}


class MaxHeap {
    constructor() {
        this.heap = [];
    }

    top() {
        return this.heap[0] || null;
    }

    _swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    push(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    bubbleUp() { // [ 1  2  6  4  5  3 ]
        let idx = this.heap.length - 1;

        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);

            if (this.heap[idx] <= this.heap[parentIdx]) break;
            this._swap(idx, parentIdx);
            idx = parentIdx;
        }
    }

    pop() {
        this._swap(0, this.heap.length - 1);
        let popped = this.heap.pop();
        this.bubbleDown();
        return popped;
    }

    bubbleDown() { // [ 6  2  3  4  5  ]
        let idx = 0;
        let length = this.heap.length;

        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let largest = idx;

            if (leftChildIdx < length && this.heap[leftChildIdx] > this.heap[largest]) {
                largest = leftChildIdx;
            }

            if (rightChildIdx < length && this.heap[rightChildIdx] > this.heap[largest]) {
                largest = rightChildIdx;
            }

            if (idx === largest) break;
            this._swap(idx, largest);
            idx = largest;
        }
    }

    size() {
        return this.heap.length;
    }
}


/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */