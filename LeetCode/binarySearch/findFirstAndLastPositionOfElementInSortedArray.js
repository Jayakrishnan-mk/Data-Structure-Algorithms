// findFirstAndLastPositionOfElementInSortedArray - leet code - medium

// pseudocode:
// create vars first, last, start, end as -1, -1, 0, array.len - 1 respectively
// use while loop. check the mid
// mid equals left+right / 2
// if the target spots first mid, assign to first
// then end = mid - 1. check with left side only
// then same like another while loop
// check the target, if spot, then assign to last
// then start = mid + 1. check the right side
// at the end of the loop, return left and right arrays.

let searchRange = (array, target) => {
    let start = 0;
    let end = array.length - 1;
    let first = -1;
    let last = -1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (array[mid] === target) {
            first = mid;
            end = mid - 1;
        } else if (array[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    start = 0;
    end = array.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (array[mid] === target) {
            last = mid;
            start = mid + 1;
        } else if (array[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return [first, last];
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8))