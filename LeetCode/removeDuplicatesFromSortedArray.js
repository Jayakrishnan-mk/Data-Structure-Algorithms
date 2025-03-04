// removeDuplicatesFromSortedArray

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