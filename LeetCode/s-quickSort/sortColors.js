// sort colors - leet code - medium

// quick sort

// pseudocode:
// make fn quickSort and pivotFn
// call quickSort first and accept the params array, left and right
// left is 0 and right is array.length - 1 initially
// use this fn as recursion. so base case is left<right, then return array.
// and make variables called pivotIndex,swapIndex. for finding pivotIndex, call the fn pivotFn
// for calling, use the args are array, left and right only 
// in pivotFn, take these as params and make a loop
// make a variable pivotPoint with the start index
// and the swapIndex variable also. this will be start value
// same like check with each values which is smaller. and swap it with the swapIndex and swapIndex++
// make a separate swap fn inside this pivotFn
// after the loop , swap the pivotPoint's index with swapIndex.
// return the array
// and in quickSort fn, make it left and right variables as splitting the array
// and call recursion method
// atlast return the array

function pivotFn(array, start = 0, end = array.length - 1) {
    function swap(array, i, j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    let pivotPoint = array[start];
    let swapIndex = start;

    for (let i = start + 1; i <= end; i++) {
        if (array[i] < pivotPoint) {
            swapIndex++;
            swap(array, i, swapIndex);
        }
    }
    swap(array, swapIndex, start);
    return swapIndex;
}

function quickSort(array, left = 0, right = array.length - 1) {
    if (left < right) {        // base case
        let pivotIndex = pivotFn(array, left, right); // 3
        // left
        quickSort(array, left, pivotIndex - 1);
        // right 
        quickSort(array, pivotIndex + 1, right);
    }
    return array;
}

var sortColors = function (nums) {
    return quickSort(nums);
};
// console.log(sortColors([3, 2, 3, 1, 2, 4, 5, 5, 6]))
console.log(sortColors([2,0,1]))