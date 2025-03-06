// removeDuplicatesFromSortedArray

// pseudocode:
// check edge case, if array length is 0, return 0
// create variable insertPos as 1
// make a loop
// the array is already sorted. so loop start with i = 1
// and check with the i-1 is same or not in a condition
// if not, then assign that value to insertPos position and increment insertPos
// after loop return insertPos. it will be the array length with unique values.

var removeDuplicates = function (array) {
    // edge case
    if (array.length === 0) return 0;
    let insertPos = 1;

    for (let i = 1; i < array.length; i++) {
        if (array[i] !== array[i - 1]) {
            array[insertPos] = array[i];
            insertPos++;
        }
    }
    // let returnResult = array.slice(0, insertPos);
    return insertPos;
};

console.log('res', removeDuplicates([1, 1, 2]));