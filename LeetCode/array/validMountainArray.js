

// valid mountain array - leetcode - easy


// pseudocode: 
// first check the length is lt 3, if it is,return false
// then initialise i as 0.
// then, loop the array. using while loop, and condition would be-
// i < i+1
// then i++
// after the loop, check the i is 0 or length - 1
// if it is, return false. bcs, if the index is 0 or last, then-
// it will not be a valid mountain
// then use another loop, condition would be-
// i > i+1 && i+1 < length
// at the end, after all loops, return i === length-1
// this will make the return value true or false
// if i is last index, then it would be mountain.


let validMountainArray = function (arr) {
    if (arr.length < 3) return false;

    let length = arr.length;
    let i = 0;

    // walk up
    while (arr[i] < arr[i + 1] && i + 1 < length) {
        i++;
    }

    // peak can't be first or last
    if (i === 0 || i === length - 1) return false;

    // walk down
    while (arr[i] > arr[i + 1] && i + 1 < length) {
        i++;
    }
    return i === length - 1;
}


console.log(validMountainArray([2, 3, 10, 1]));
console.log(validMountainArray([2, 3, 4, 1]));