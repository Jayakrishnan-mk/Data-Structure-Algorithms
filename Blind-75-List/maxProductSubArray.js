
// maxProductSubArray - leetcode - medium

// create 2 vars currMin and currMax as 1, 1 respectively
// and the result var will be the first array value initially
// make a for of loop
// make a var temp for storing the currMax * i
// find the currMax. it will be the max of currMax * i, currMin * i, i
// same like currMin. min of the above 3
// after that, find result also. result will be the max of currMax and result
// after the loop, return result.

var maxProduct = function (nums) { //  [2,3,-2,4]
    let currMin = 1, currMax = 1;
    let result = nums[0];
    let temp;

    for (let i of nums) {
        temp = currMax * i;
        currMax = Math.max(temp, currMin * i, i);
        currMin = Math.min(temp, currMin * i, i);
        result = Math.max(currMax, result);
    }
    return result;
};
