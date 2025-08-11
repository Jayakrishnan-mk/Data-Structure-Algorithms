
// pivot index - leetcode - easy

// make a var leftSum
// loop through the array
// find total sum of array
// do next loop
// check, the left(i) is eq to total - leftSum - left
// if it is, return i.


var pivotIndex = function (nums) {
    let leftSum = 0;
    let total = 0;

    for (let i of nums) {
        total += i;
    };

    for (let i = 0; i < nums.length; i++) {
        if (leftSum === total - leftSum - nums[i]) {
            return i;
        }
        leftSum += nums[i];
    }
    return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]))
console.log(pivotIndex([1, 2, 3]))
console.log(pivotIndex([2, 1, -1]))



