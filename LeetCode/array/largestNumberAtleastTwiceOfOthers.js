

//   Largest Number At Least Twice of Others - leetcode - easy


// create a loop and find the largest item
// create another loop, and check, largest is >= every item's 2x
// if it is, after the loop, return the index of largest.


var dominantIndex = function (nums) {
    let largestItem = nums[0];


    for (let i = 0; i < nums.length; i++) {
        largestItem = Math.max(largestItem, nums[i]);
    }


    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== largestItem && largestItem < nums[i] * 2) {
            return -1;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (largestItem === nums[i]) return i;
    }
};


console.log(dominantIndex([3, 6, 1, 0]))