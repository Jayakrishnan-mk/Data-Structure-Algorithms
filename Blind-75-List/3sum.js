
// 3sum - leetcode - medium

// pseudocode:
// make a var result
// and sort the current nums to asc order for make 2 pointers approach
// make a loop, for loop, ie <len-2
// and check, i>0 and the nums[i] === nums[i-1], then continue the loop
// inside make 2 pointers
// left will be i+1, and right will be last item
// inside that, make a while loop, to iterate left<right case
// if it is, then, find sum, with adding the nums of i, left and right
// it its 0, then we got one pair/triplet, just push to result array
// after that push, make a while with left<right,
// and check the nums[left] and nums[left+1] equals, if it is, left++
// same like a while for checking, nums[right] equals nums[right-1], if it is, right++
// after that, make left++ and right-- for next iteration.
// after this if, make an else if, in that, sum < 0, then left++
// otherwise, in else, right--;
// after all loops, just return the result array. you're done🔥


let threeSum = (nums) => {
    let result = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // skip the duplicates

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);

                // Skip duplicate 'b' and 'c'
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++;
                right--;
            }
            else if (sum < 0) left++
            else right--;
        }
    }
    return result;
}

console.log(twoSum([-1, 0, 1, 2, -1, -4]))




















// var threeSum = function (nums) { //
//     let result = [];
//     nums.sort((a, b) => a - b); // [-4,-1,-1,0,1,2]
//     // < 4
//     for (let i = 0; i < nums.length - 2; i++) {
//         // i = 3
//         if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicate 'a'
//         let left = i + 1; // 4
//         let right = nums.length - 1; // 5

//         while (left < right) {
//             let sum = nums[i] + nums[left] + nums[right];

//             if (sum === 0) {
//                 result.push([nums[i], nums[left], nums[right]]);
//                 // [-1, -1, 2], [-1,0,1]

//                 // Skip duplicate 'b' and 'c'
//                 while (left < right && nums[left] === nums[left + 1]) left++;
//                 while (left < right && nums[right] === nums[right - 1]) right--;

//                 left++;
//                 right--;
//             } else if (sum < 0) {
//                 left++; // 5
//             } else {
//                 right--;
//             }
//         }
//     }

//     return result;
// };


// console.log(twoSum([-1, 0, 1, 2, -1, -4]))

// 