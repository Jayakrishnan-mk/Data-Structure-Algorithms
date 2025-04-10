
// findMinInRotatedSortedArray - leetcode - medium

// binary search method
// make 2 vars called left and right as 0 and len-1 initially
// make a while loop to check left<right
// find mid. 
// check, the nums[mid] > nums[right]. if it is
// then left will be mid+1. otherwise , right will be mid.
// after the loop, return the nums[left].

var findMin = function (nums) {
    let left = 0, right = nums.length - 1;
    let mid;

    while (left < right) {
        mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[right]) { // means, this side will be unsorted
            left = mid + 1; // work on right side
        } else {
            right = mid;
        }
    }
    return nums[left]; // it means left == right .
}

console.log(findMin([3, 4, 5, 1, 2]))

//  first, brute force approach
// loop the array
// check the i is less than i+1
// if it is, then continue. if not,
// then, return the i+1 th value
// if the loop is completed, then return starting value of nums

// var findMin = function (nums) {
//     for (let i = 0; i < nums.length - 1; i++) {
//         if (nums[i] < nums[i + 1]) {
//             continue;
//         }
//         return nums[i + 1];
//     }
//     return nums[0];
// };