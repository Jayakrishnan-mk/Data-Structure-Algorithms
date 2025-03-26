// k'th smallest element in a bst - leetcode - medium

// approach - using max heap 
// NB = NOT A HEAP PROBLEM. ITS A BST TRAVERSE PROBLEM. JUST DID FOR STUDY PURPOSE.
// not a good approach than bst traversal.

// pseudocode:
// first we need to traverse the tree.
// use preorder traversal method
// add the val to a result array
// after that, pass this result array to a min heap
// then find the k'th element from that min heap
// and return it. done

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    pop() {
        this._swap(0, this.heap.length - 1);
        let popped = this.heap.pop();
        this.bubbleDown();
        return popped;
    }

    bubbleDown() {  //  6 2 3 4 5 
        let idx = 0;

        while (true) {
            let largest = idx;
            let leftChild = 2 * idx + 1;
            let rightChild = 2 * idx + 2;

            if (leftChild < this.heap.length && this.heap[leftChild] > this.heap[largest]) {
                largest = leftChild;
            }

            if (rightChild < this.heap.length && this.heap[rightChild] > this.heap[largest]) {
                largest = rightChild;
            }

            if (largest === idx) break;
            this._swap(idx, largest);
            idx = largest;
        }
    }

    _swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }

    push(val, k) {
        this.heap.push(val);
        this.bubbleUp();

        if (this.heap.length > k) {
            this.pop();
        }
    }

    bubbleUp() { //  1  2  6  4  5  3
        let idx = this.heap.length - 1;

        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);

            if (parentIdx >= 0 && this.heap[idx] <= this.heap[parentIdx]) break;
            this._swap(idx, parentIdx);
            idx = parentIdx;
        }
    }

    kthSmallest() {
        return this.heap[0]; // in heap, the first item will be largest. means kth smallest. here k is the heap size.
    }
}

var kthSmallest = function (root, k) {
    let heap = new MaxHeap();
    let traversed = [];

    function traverse(root) {
        if (!root) return null;

        traversed.push(root.val);
        if (root.left) traverse(root.left);
        if (root.right) traverse(root.right);
    }
    traverse(root);
    for (let i of traversed) {
        heap.push(i, k);
    }
    return heap.kthSmallest();
}

console.log(kthSmallest([3, 1, 4, null, 2], 1))