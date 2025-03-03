// write a fn called sumZero which accepts a sorted array of integers.
// the fn should find the first pair where the sum is zero.
// return an array that includes both values that sum to zero or undefined if a pair doesn't exist.

const array = [-4, -3, -2, -1, 0, 1, 2, 5, 10];

// make fn sumZero
// check with the last value compare to first value manner
// call fn

console.log(sumZero(array));
function sumZero(array) {
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        let sum = array[left] + array[right];
        if (sum === 0) return [array[left], array[right]];
        else if (sum < 0) {
            left++;
        } else {
            right--;
        };
    }
}