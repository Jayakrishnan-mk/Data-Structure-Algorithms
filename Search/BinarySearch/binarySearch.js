// write a fn to accept a sorted array and a value
// check the value's index through checking binary search way
// if found, then return index.
// otherwise return -1.

function binarySearch(array, value) {
    let leftSide = 0;
    let rightSide = array.length - 1;
    while (leftSide <= rightSide) {
        let avg = Math.floor((leftSide + rightSide) / 2);
        if (value === array[avg]) return avg;
        else if (value > array[avg]) leftSide = avg + 1;
        else rightSide = avg - 1;
    }
    return -1;
}
console.log(binarySearch([1, 2, 3, 5, 6, 7, 8, 9], 9));