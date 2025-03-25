// sliding window maximum - leetcode - hard

// using maxHeap (priority queue.) = O(N log N) 

// pseudocode:
// handle the edge cases first
// if k is 1 , then return the same array
// if array length is 0 or k is greater than array length, return []
// create a maxHeap
// make a var result as []
// use a for loop to loop the array
// push the value with index to heap
// while pushing use the bubble up.
// then check the current window is reached, if it is,
// then pop the expired index value from heap. use while loop for this
// after the popping, push the top of heap to result array
// after the loop, return result array

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    push(val, index) {
        if (!this.size()) {
            this.heap.push({ val, index });
            return;
        }
        this.heap.push({ val, index });
        this._heapifyUp();
    }

    _heapifyUp() { // 6 5 1 3 2 4
        let length = this.size();
        let idx = length - 1;

        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);

            if (this.heap[idx].val < this.heap[parentIdx].val) break;
            this._swap(idx, parentIdx);
            idx = parentIdx;
        }
    }

    popExpired(left) {
        while (this.heap.length > 0 && this.heap[0].index < left) {
            this._swap(0, this.size() - 1);
            this.heap.pop();
            this._heapifyDown()
        }
    }

    _heapifyDown() { //  1 5 4 3 2 
        let idx = 0;

        while (true) {
            let largest = idx;
            let leftChild = 2 * idx + 1;
            let rightChild = 2 * idx + 2;

            if (leftChild < this.size() && this.heap[leftChild].val > this.heap[largest].val) {
                largest = leftChild;
            }
            if (rightChild < this.size() && this.heap[rightChild].val > this.heap[largest].val) {
                largest = rightChild;
            }

            if (largest === idx) break;
            this._swap(largest, idx);
            idx = largest;
        }
    }

    top() {
        return this.size() > 0 ? this.heap[0].val : null;
    }

    _swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }

    size() {
        return this.heap.length;
    }
}

var maxSlidingWindow = function (nums, k) {
    if (k === 1) return nums; // If window size is 1, return nums as is
    if (nums.length === 0 || k > nums.length) return [];

    let maxHeap = new MaxHeap();
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        maxHeap.push(nums[i], i); // push the value with index.

        if (i >= k - 1) { // window reached
            maxHeap.popExpired(i - k + 1); // the window out bound check
            result.push(maxHeap.top());
        }
    }
    return result;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))
