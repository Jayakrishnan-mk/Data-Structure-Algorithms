

// Your input
// [3,2,2,3], 3

// Expected answer
// [2,2]


// var removeElement = function (nums, val) {
//     let k = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === val) {
//             nums[i] = '_';
//         } else {
//             k++;
//         }
//     }
//     let pointer = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== '_') {
//             [nums[pointer], nums[i]] = [nums[i], nums[pointer]];
//             pointer++;
//         }
//     }
//     let indx = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === '_') {
//             indx = i;
//         }
//     }
//     nums.length = k;
//     return nums;
// };

// console.log(removeElement([3, 2, 2, 3], 3));
// o/p - [2,2]