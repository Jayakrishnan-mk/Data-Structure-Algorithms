
// maxBinaryHeap

class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    bubbleUp() {
        let heap = this.values;
        let index = heap.length - 1;

        // console.log('index', index)
        let parentIndx = Math.floor((index - 1) / 2);

        while (parentIndx >= 0) {
            if (heap[index] < heap[parentIndx]) {
                return heap;
            } else {
                let temp = heap[parentIndx];
                heap[parentIndx] = heap[index];
                heap[index] = temp;

                index = parentIndx; 
                parentIndx = Math.floor((index - 1) / 2);
            }
        }
        return this.values;
    }

    insert(value) {
        if (!this.values.length) {
            this.values.push(value);
            return this.values;
        }
        this.values.push(value);
        return this.bubbleUp();
    }

}

let heap = new MaxBinaryHeap();

heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

console.log(heap.insert(1));