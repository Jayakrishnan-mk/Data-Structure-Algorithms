// minHeap - Priority Queue 

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        let element = this.values[idx];

        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (element.priority >= parent.priority) break;

            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }


    dequeue() {
        let min = this.values[0];
        let end = this.values.pop();
        if (this.values.length > 0) { // edge case
            this.values[0] = end;
            this.sinkDown();
        }
        console.log('reeee')
        // return this.values;
        return min;
    }

    sinkDown() { // [ 10, 26, 15, 20, 25 ]
        let element = this.values[0]; // 10
        let idx = 0;
        let length = this.values.length;
        while (true) {
            let swap = null;
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;

            if (leftChildIdx < length) { // checking first index is out of bounds
                leftChild = this.values[leftChildIdx]
                if (element.priority > leftChild.priority) {
                    swap = leftChildIdx;
                }
            }

            if (rightChildIdx < length) { // checking second index is out of bounds
                rightChild = this.values[rightChildIdx]

                if (
                    swap === null && rightChild.priority < element.priority ||
                    swap !== null && rightChild.priority < leftChild.priority
                ) {
                    swap = rightChildIdx;
                }

            }

            if (swap === null) break;

            this.values[idx] = this.values[swap]; // swapping with child
            this.values[swap] = element; // 10 is rearranging here.
            idx = swap;
        }
    }

}

let ER = new PriorityQueue(); // emergency room

ER.enqueue('leg injury', 3);
ER.enqueue('viral fever', 4);
ER.enqueue('accident emergency', 2);
ER.enqueue('brain injury', 1);
ER.enqueue('bowlegs', 5);
ER.enqueue('fever', 6);

console.log('er', ER)
ER.dequeue();
console.log('after dq', ER)

// input : [ 6,4,5,1,3,2 ]

//              6
//             / \
//           4    5
//          /\    /
//         1  3  2
//
// output : [ 26, 25, 15, 20, 10 ]
