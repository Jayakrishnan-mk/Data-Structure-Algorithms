// implement a fn called countUniqueValues , which accepts a sorted array, and -
// counts the unique values in the array. dont use a seperate vaiable
// there can be negative numbers in the array,but it will always be sorted.

// make a fn for count
// make a loop
// use i and j for checking 2 values from starting,
// if the values are same, j move to next value
// if values are not same, then take the different values to first
// take the array length to index. and return the count.

console.log(findCount([1, 2, 2, 2, 2, 2, 2, 3]))

function findCount(array) {
    let i = 0;
    for (let j = 1; j < array.length; j++) {
        if (array[i] !== array[j]) {
            array[i + 1] = array[j];
            i++
        }
    }
    return i + 1;
}