
// extract max   (remove the root from a maxBinaryHeap)

// input : [ 50, 26, 15, 20, 25, 10 ]

//              50
//             / \
//           26   15
//          /\    /
//       20 25  10
//
// output : [ 26, 25, 15, 20, 10 ]


// pseudocode:
// first, swap the end'th item with root item/head.
// take this head to a variable. bcs we need to return that item as removed item.
// then pop the last item. now we removed the head. now make the heap valid
// for that, make a seperate fn sinkDown.

// make a var element as current first item of the heap.
// make the vars idx and length as 0 and array length respectively
// make a while loop with condition true
// make the vars swap, leftChildIdx, rightChildIdx as null, 2*n+1, 2*n+2 respectively
// take 2 more vars as leftChild and rightChild

// first check, the leftChildIdx is not out of bounds
// with checking, leftChildIdx < length
// then, assign the leftChildIdx's value to leftChild var
// then check with the 'element' value < leftChild. if it is, then assign this index to swap
// the second check is, rightChildIdx is out of bounds
// then, assign the rightChildIdx's value to rightChild var
// then, check 2 conditions. one-
// if swap is null and rightChild > element, or ||
// swap is not null and rightChild > leftChild, then assign this index to swap
// after these conditions, last check, if swap is null, then break from loop.
// inside the loop, last, swap item. for that-
// swap the arrays idx value with arrays swap value.
// the arrays swap value with element
// assign the swap to idx

class MaxBinaryHeap {
    constructor() {
        this.values = [50, 26, 15, 20, 25, 10];
    }

    extractMax() {
        let max = this.values[0];
        let end = this.values.pop();
        if (this.values.length > 0) { // edge case
            this.values[0] = end;
            this.sinkDown();
        }
        console.log('reeee')
        // return this.values;
        return max;
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
                if (element < leftChild) {
                    swap = leftChildIdx;
                }
            }

            if (rightChildIdx < length) { // checking second index is out of bounds
                rightChild = this.values[rightChildIdx]

                if (
                    swap === null && rightChild > element ||
                    swap !== null && rightChild > leftChild
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

let heap = new MaxBinaryHeap();
console.log('asdf', heap.extractMax());
