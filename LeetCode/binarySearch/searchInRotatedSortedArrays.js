// searchInRotatedSortedArrays - leet code - medium

// pseudocode:
// take vars start and end as 0 and array.length - 1 respectively
// use while. 
// find mid like start + end / 2
// if mid === target,return mid
// check the left side is sorted or not
// with checking, array[start] < array[mid]
// if it is, then check the next process
// same like, target is < mid
// the same process in else side also
// with checking array[mid] < array[end]
// if it is, then check with target.
// after the loop, if didnt get the mid, return -1; 

var search = function (array, target) {
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        // Found the target
        if (array[mid] === target) return mid;

        // Check which side is sorted
        if (array[start] <= array[mid]) {
            // Left side is sorted
            if (array[mid] >= target && target >= array[start]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else {
            // Right side is sorted
            if (array[mid] <= target && target <= array[end]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }

    // If target was not found
    return -1;
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 5))