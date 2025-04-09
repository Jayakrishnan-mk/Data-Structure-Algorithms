
// productOfArrayExceptSelf - leetcode - medium

//  using prefix and postfix products

// first make vars prefix, postfix and resultArray
// make first loop, from 0 to nums.len-1
// make the result[i] = prefix.
// and update the prefix. with prefix*nums[i]
// same like make second loop
// condition will be, from nums.len-1 to 0
// here, we need to multiply with postfix to get result[i]
// make result[i] = result[i] * postfix
// then update postfix. postfix * nums[i]
// after all loops, return this result. you're done.

var productExceptSelf = function (nums) { //[1,2,3,4]
    let prefix = 1, postfix = 1, answer = Array(nums.length).fill(1);

    for (let i = 0; i < nums.length; i++) {
        answer[i] = prefix;
        prefix *= nums[i];
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        answer[i] *= postfix;
        postfix *= nums[i];
    }

    return answer;
}

console.log(productExceptSelf([1, 2, 3, 4]))

// brute force
// var productExceptSelf = function (nums) { //[1,2,3,4]
//     let answer = [];
//     let total = 1;

//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 0; j < nums.length; j++) {
//             if (i === j) continue;
//             total *= nums[j];
//         }
//         answer.push(total);
//         total = 1;
//     }
//     return answer;
// };

// console.log(productExceptSelf([1, 2, 3, 4]))