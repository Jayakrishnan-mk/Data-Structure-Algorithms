class Node {
    constructor(val) {
        this.value = val;
    }
}

class MaxHeappp {
    constructor() {
        this.values = [];
    }

    _swap(i, j) {
        [this.values[i], this.values[j]] = [this.values[j], this.values[i]];
    }

    push(val) {
        this.values.push(new Node(val));
        this.bubbleUp();
    }

    bubbleUp() {
        let heap = this.values;
        let idx = heap.length - 1;

        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            if (heap[parentIdx].value >= heap[idx].value) break;
            this._swap(idx, parentIdx);
            idx = parentIdx;
        }
    }

    pop() {
        if (this.values.length === 0) return null;
        if (this.values.length === 1) return this.values.pop();

        this._swap(0, this.values.length - 1);
        let popped = this.values.pop();
        this.sinkDown();
        return popped;
    }

    sinkDown() {
        let idx = 0;
        const length = this.values.length;

        while (true) {
            let leftChild = 2 * idx + 1;
            let rightChild = 2 * idx + 2;
            let largest = idx;

            if (leftChild < length && this.values[leftChild].value > this.values[largest].value) {
                largest = leftChild;
            }
            if (rightChild < length && this.values[rightChild].value > this.values[largest].value) {
                largest = rightChild;
            }

            if (largest === idx) break;
            this._swap(idx, largest);
            idx = largest;
        }
    }

    peek() {
        return this.values[0];
    }
}


let heap = new MaxHeappp();
heap.push(10);
heap.push(5);
heap.push(3);
heap.push(7);
heap.push(20);

while (heap.peek()) {
    console.log(heap.pop().value);
}
