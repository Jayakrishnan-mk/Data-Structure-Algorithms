

// firstMissingPositive - leetcode - hard

// create a new array with nums length + 1 
// with filling false
// then, loop the nums, and check-
// if the item is > 0 and <= length, add that i position as true in new array
// after this loop, iterate that new array and check, 
// the index of new array is false or not, if it is false, return that i. 
// it will be the smallest point
// otherwise, after loop, return length + 1.  

var firstMissingPositive = function (nums) {
    let seen = Array(nums.length + 1).fill(false);

    // console.log(seen);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0 && nums[i] <= nums.length) {
            seen[nums[i]] = true;
        }
    }

    for (let i = 1; i < seen.length; i++) {
        if (!seen[i]) return i;
    }
    return nums.length + 1;
};

console.log(firstMissingPositive([1, 2, 0]))