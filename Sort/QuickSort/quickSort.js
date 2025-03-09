//quick sort

// make an fn called quickSort
// use this fn as recursion
// 3 args - array, left and right
// base case is, left < right
// left will be 0 in starting and right will be array.length - 1
// from inside this fn, call an another fn called pivotFn for fetching the pivotIndex
// while calling that fn, send params as array, left and right as well
// in there, left side will be-arr, left and pivotIndex -1
// and , right side will be-arr, pivotIndex+1 and right.
// divide and conquere this array(partition). 
// and when the left and right sides are containing only one element, return the element.
// in the pivotFn, take the starting position of value as pivotPoint and loop the array
// and every values less than pivot is swap to the swapIndex+1 position. swapIndex will be 0 in starting.
// create a fn for swap.
// atlast, outside the loop, swap the pivot value to swapIndex position.
// return the swapIndex;

function pivotFn(array, start = 0, end = array.length - 1) {
    function swap(array, i, j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    let pivotPoint = array[start];
    let swapIndex = start;

    for (let i = start + 1; i <= end; i++) {
        if (pivotPoint > array[i]) {
            swapIndex++;
            swap(array, i, swapIndex);
        }
    }
    // dont swap with pivotPoint, swap with 'start'. bcs 'start' is the pivotPoint's index.
    swap(array, start, swapIndex);
    return swapIndex;
}

function quickSort(array, left = 0, right = array.length - 1) {
    if (left < right) {
        let pivotIndex = pivotFn(array, left, right);
        // left
        quickSort(array, left, pivotIndex - 1);
        // right
        quickSort(array, pivotIndex + 1, right);
    }
    return array;
}
console.log('final', quickSort([2, 3, -2, 100, 9, 8, 6, 10, 1]));