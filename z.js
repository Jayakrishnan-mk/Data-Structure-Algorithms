


// brute force approach
// create a var called m as 1 initially
// create a loop to iterate nums with i
// inside, another loop for j
// if i === j, then continue. otherwise, multiple with m
// create a new array for result, and push the m,
// when the inner loop completes. then make it m = 1 again.
// at the end, return result.

var productExceptSelf = function (nums) {
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        let m = 1;
        for (let j = 0; j < nums.length; j++) {
            if (i === j) continue;
            m = nums[j] * m;
        }
        result.push(m);
    }
    return result;
};


console.log(productExceptSelf(nums = [1, 2, 3, 4]))