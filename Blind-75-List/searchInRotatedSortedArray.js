
// searchInRotatedSortedArray - leetcode - medium

//  pseudocode:
// make left and right vars as 0 and len-1
// make a while loop with condition left <= right
// find mid
// if the nums[mid] equals the target, return mid;
// if, nums[start] <= nums[mid] // left side
//  in else, right side
// inside if, another if
// if, nums[left] <= target && nums[mid] >= target // then left side has target
// make right as mid-1, else left as mid+1
// same like in else
// if, nums[right] >= target && nums[mid] <= target
// then left will be , mid+1. and in else, right will be mid-1

var search = function (nums, target) {
    let left = 0, right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return mid;

        if (nums[left] <= nums[mid]) { // left side will be sorted
            if (nums[left] <= target && nums[mid] >= target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else { // right side
            if (nums[right] >= target && nums[mid] <= target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
};

console.log(search(nums = [4, 5, 6, 7, 0, 1, 2], target = 0))