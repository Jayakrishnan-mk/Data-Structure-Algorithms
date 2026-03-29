
// Example:
const nums = [2, 7, 11, 15];
const target = 9;

// Output: [2, 7]  (because 2 + 7 = 9)

// create a hashmap
// loop the nums
// check the target-i is exist in hashmap
// if not, add the i to map with its index
// if it is, return the i and map's item.
// done

function twoSum(nums, target) {
    let hm = new Map();

    for (let i of nums) {
        let key = target - i;
        if (hm.has(key)) {
            return [key, i];
        }
        hm.set(i, i);
    }
}
console.log(twoSum(nums, target));

// Time complexity is O(n). we traverse the array once. 
// HashMap lookup and insert are both O(1) average case, so the overall complexity is O(n)