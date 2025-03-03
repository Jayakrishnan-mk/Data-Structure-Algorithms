// merge sort

// create a fn for mergeSort.
// create a fn for merge
// use the merge fn for recursion
// find the mid value of the array and use left and right splitting mechanism
// pass the arrays to mergeSort fn
// in mergeSort, use the while loop for checking with the two arrays values
// according to the sorted values, push to a new array
// check the remaining values in each arrays and push to the resultArray
// return array.

function mergeSort(arr1, arr2) {
    let resultArray = [];
    let i = 0;
    let j = 0;

    // Merge two sorted arrays
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            resultArray.push(arr1[i]);
            i++;
        } else {
            resultArray.push(arr2[j]);
            j++;
        }
    }

    // Add remaining elements from arr1 (if any)
    while (i < arr1.length) {
        resultArray.push(arr1[i]);
        i++;
    }
    // Add remaining elements from arr2 (if any)
    while (j < arr2.length) {
        resultArray.push(arr2[j]);
        j++;
    }

    return resultArray;
}

// recursion used fn....
function merge(array) {
    if (array.length <= 1) return array;
    let mid = Math.floor(array.length / 2);
    let left = merge(array.slice(0, mid));
    let right = merge(array.slice(mid));

    return mergeSort(left, right);
}

console.log(merge([1, 3, 9, 4, 2]));