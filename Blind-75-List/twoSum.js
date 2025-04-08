
// first, make a var called value and a hashmap
// then loop the nums
// assign the target-nums[i] to value
// check, if value is not in map, add the nums[i] and index
// otherwise return the index of the map(nums[i]) and index

var twoSum = function (nums, target) {
    let value;
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        value = target - nums[i];
        if (map.has(value)) {
            return [map.get(value), i];
        }
        map.set(nums[i], i);
    }
};

console.log(twoSum(nums = [2, 7, 11, 15], target = 9))