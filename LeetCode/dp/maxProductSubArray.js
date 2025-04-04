
// maxProductSubArray - leetcode - medium

// pseudocode:
// create 2 vars currMax and currMin as 1 initially
// make a result variable with the nums[0] initially
// then make a for loop
// in that , check the max with currMax*i and currMin*i and i
// this is bcs, if array has negative values, then -ve + -ve will be positive
// so in that scenario, for handing this is needed.
// same like for currMin
// after that, check, the result or currMax is max product
// after the loop, return the result

let maxProduct = (nums) => {
    let currMax = 1, currMin = 1;
    let result = nums[0];

    for (let i of nums) {
        let temp = currMax * i;
        currMax = Math.max(temp, (currMin * i), i);
        currMin = Math.min(temp, (currMin * i), i);
        result = Math.max(result, currMax);
    }
    return result;
}

console.log(maxProduct([2, 3, -2, 4]))