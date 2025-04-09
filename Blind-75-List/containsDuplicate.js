
// containsDuplicate - leetcode -easy

// first make a map
// loop the nums array and add the num to map
// in an another loop, check the i is inside map with has property
// if its not, after end of the loop, return false
// if it is, return true

let containsDuplicate = (nums) => {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) map.set(nums[i], i);
        if (map.has(nums[i]) && map.get(nums[i]) !== i) return true;
    }
    return false;
}

console.log(containsDuplicate([1, 2, 3, 1]))