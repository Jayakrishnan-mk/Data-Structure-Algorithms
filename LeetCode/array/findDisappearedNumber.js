

// finding disappeared number - leetcode - easy


// create a set to take unique
// loop till the length of nums
// start from 1. if its not in set, add to result array
// return result.done.


var findDisappearedNumbers = function(nums) {
    let result = [];
    let set = new Set(nums);

    for(let i = 1; i<=nums.length; i++) {
        if(!set.has(i)) result.push(i);
    }
    return result;
};

