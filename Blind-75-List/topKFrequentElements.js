
// topKFrequentElements - leetcode - medium

class MinHeap {
    constructor() {
        this.heap = [];
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }

    size() {
        return this.heap.length;
    }

    push(val, priority) {
        this.heap.push({ val, priority })
        this.bubbleUp();
    }

    bubbleUp() { //  {1 : 2}  {4 : 5}  { 6:8 }
        let idx = this.size() - 1;

        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);

            if (parentIdx < 0 || this.heap[idx].priority >= this.heap[parentIdx].priority) break;

            this.swap(idx, parentIdx);
            idx = parentIdx;
        }
    }

    pop() {
        if (!this.size()) return null;
        if (this.size() === 1) return this.heap.pop();
        this.swap(0, this.size() - 1);
        let popped = this.heap.pop();
        this.sinkDown();
        return popped;
    }

    sinkDown() { // {1 : 2}  {4 : 5}  { 6:8 }
        let idx = 0;

        while (true) {
            let leftChild = 2 * idx + 1;
            let rightChild = 2 * idx + 2;
            let smallest = idx;

            if (leftChild < this.size() && this.heap[leftChild].priority < this.heap[smallest].priority) {
                smallest = leftChild;
            }
            if (rightChild < this.size() && this.heap[rightChild].priority < this.heap[smallest].priority) {
                smallest = rightChild;
            }
            if (idx === smallest) break;
            this.swap(idx, smallest);
            idx = smallest;
        }
    }
}

var topKFrequent = function (nums, k) {
    let minHeap = new MinHeap();
    let hm = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (!hm.has(nums[i])) {
            hm.set(nums[i], 1);
        } else {
            hm.set(nums[i], (hm.get(nums[i]) + 1))
        }
    }

    hm.forEach((freq, num) => {
        minHeap.push(num, freq)
        if (minHeap.size() > k) minHeap.pop();
    })

    return minHeap.heap.map(item => item.val);
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));