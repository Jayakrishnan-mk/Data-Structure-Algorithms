
// containsDuplicate - leetcode -easy

// first make a map
// loop the nums array and add the num to map
// check, the map has already the nums[i]
// if its not, add it, if it is, return true
// after the loop, return false;

let containsDuplicate = (nums) => {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) map.set(nums[i]);
        else return true;
    }
    return false;
}

console.log(containsDuplicate([1, 2, 3, 1]))