
// merge k sorted lists - leetcode - hard

// approach - min heap ......

// pseudocode:
// make the priority queue
// loop the input lists
// and push the node of the list one by one in a loop
// there, create a dummy object of the listnode.
// after that, make another loop
// in there, pop the node from the heap
// assign that node to a var
// check that node is not empty, edge case handle
// then, make the next node after assign that to currentNode.
// after the loop, return this dummy.next list. 

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class MinimHeap {
    constructor() {
        this.heap = [];
    }

    _swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    enqueue(node) {
        this.heap.push(node);
        this._heapifyUp();
    }

    _heapifyUp() { // [ 1  2  6  4  5  3 ]
        let idx = this.heap.length - 1;

        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);

            if (this.heap[idx].val >= this.heap[parentIdx].val) break;
            this._swap(idx, parentIdx);
            idx = parentIdx;
        }
    }

    dequeue() {
        this._swap(0, this.heap.length - 1);
        let popped = this.heap.pop();
        this._heapifyDown();
        return popped;
    }

    _heapifyDown() { // [ 6  2  3  4  5  ]
        let idx = 0;
        let length = this.heap.length;

        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let smallest = idx;

            if (leftChildIdx < length && this.heap[leftChildIdx].val < this.heap[smallest].val) {
                smallest = leftChildIdx;
            }

            if (rightChildIdx < length && this.heap[rightChildIdx].val < this.heap[smallest].val) {
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

function mergeKLists(lists) {
    let minHeap = new MinimHeap();

    for (let l of lists) { // first step, push the node of the list to heap
        if (l) {
            minHeap.enqueue(l);
        }
    }

    let dummy = new ListNode(0);
    let current = dummy;

    while (minHeap.size() > 0) {
        let node = minHeap.dequeue();
        current.next = node;
        current = node;

        if (node.next) {
            minHeap.enqueue(node.next);
        }
    }
    return dummy.next;
}


console.log(mergeKLists([[1, 4, 5], [1, 3, 4], [2, 6]]))



// BRUTE FORCE
// var mergeKLists = function (lists) {
//     let array = [];

//     for (let i = 0; i < lists.length; i++) {
//         let current = lists[i];

//         while (current) {
//             array.push(current.val);
//             current = current.next;
//         }
//     }
//     array.sort((a, b) => a - b);

//     let dummy = new ListNode(0); // creating a dummy node

//     let current = dummy;
//     for (let val of array) {
//         current.next = new ListNode(val); // Append new node
//         current = current.next;
//     }

//     return dummy.next; // Return the actual merged linked list
// }


// console.log(mergeKLists(nums = [[1, 4, 5], [1, 3, 4], [2, 6]]))