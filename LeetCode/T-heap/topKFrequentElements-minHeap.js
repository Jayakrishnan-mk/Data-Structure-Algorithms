
// top k frequent elements

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// approach - min heap - manual solution ......

// pseudocode: 
// make a class called minHeap
// add the _size, top, swap, enqueue, dequeue, heapify_up and heapify_down fns.
// in main fn, make a hashmap
// add the count and values to there
// make an obj heap from the class minHeap
// add the hashmap's values to the heap according to the priority
// the priority would be the count of the values
// after push the value to the heap, check the heap length is greater than k
// if it is, then dequeue. 
// atlast, traverse the queue, and return the heap in an array.

class MiniHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    top() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }

    _swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }

    enqueue(val, freq) {
        this.heap.push({ val, freq });
        this._heapifyUp();
    }

    _heapifyUp() {  //  1  2  6  4  5  3
        let idx = this.heap.length - 1;

        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);

            if (this.heap[idx].freq >= this.heap[parentIdx].freq) break;
            this._swap(parentIdx, idx);
            idx = parentIdx;
        }
    }

    dequeue() {
        if (!this.size()) return null;
        if (this.size() === 1) {
            return this.heap.pop();
        }
        this._swap(0, this.size() - 1);
        let popped = this.heap.pop();
        this._heapifyDown();
        return popped;
    }

    _heapifyDown() {  //   6  2  3  4  5  
        let idx = 0;

        while (true) {
            let leftIdx = 2 * idx + 1;
            let rightIdx = 2 * idx + 2;
            let smallest = idx;

            if (leftIdx < this.size() && this.heap[leftIdx].freq < this.heap[smallest].freq) {
                smallest = leftIdx;
            }
            if (rightIdx < this.size() && this.heap[rightIdx].freq < this.heap[smallest].freq) {
                smallest = rightIdx;
            }

            if (smallest === idx) break;

            this._swap(idx, smallest);
            idx = smallest;
        }
    }

}

var topKFrequent = function (nums, k) {
    let freqMap = new Map();

    nums.forEach((num) => {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    })

    let miniHeap = new MiniHeap();

    freqMap.forEach((freq, val) => {
        miniHeap.enqueue(val, freq);
        if (miniHeap.size() > k) {
            miniHeap.dequeue();
        }
    })
    return miniHeap.heap.map((item) => item.val);
}

console.log(topKFrequent([4, 4, 4, 8, 8, 9, 9, 9, 9, 9], 2));  // Expected output: [1, 2]
