
// maximum sub array - leetcode - medium

// first make 2 vars currSum and maxSum
// maxSum will be first value of nums initially and currSum will be 0
// make a for of loop, 
// in that,first check, the currSum is negative, then currSum make 0
// otherwise, currSum is currSum + i
// after that, check the max value of maxSum and currSum and assign to maxSum
// after the loop, return the maxSum.

var maxSubArray = function (nums) { // [-2,1,-3,4,-1,2,1,-5,4]
    let maxSum = nums[0], currSum = 0;

    for (let i of nums) {
        if (currSum < 0) currSum = 0;
        currSum += i;
        maxSum = Math.max(currSum, maxSum);
    }
    return maxSum;
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))