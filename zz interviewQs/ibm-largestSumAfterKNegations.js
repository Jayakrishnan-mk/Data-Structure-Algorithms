
// IBM QUESTION ........... BACKEND DEV question.

// largest sum after k negations

// pseudo:
// sort the nums first.
// loop the input nums. condition will be i < nums.length, and k > 0
// if the i is < 0, then flip the first item.
// then decrease k.
// after this loop, check, if the k % 2 is 1, then,
// sort again in asc order
// then, change the sign of first value again. (enough. only once we need to change. bcs,
// then we can flip the same number's sign again ang again. the same result will get.)
// after that, find total and return. done.


var largestSumAfterKNegations = function (nums, k) {
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length && k > 0; i++) {
        if (nums[i] < 0) {
            nums[i] = -nums[i];
            k--;
        }
    }

    if (k % 2 === 1) {
        nums.sort((a, b) => a - b);
        nums[0] = -nums[0];
    }

    return nums.reduce((acc, item) => acc + item, 0);
};


console.log(largestSumAfterKNegations([-2, 1, 3, 9, 8, 5, -7], 7))

