// maximum sub array sum - leet code - medium ....

var maxSubArray = function (array) {
    if (array.length === 1) return array[0];
    if (array.length === 0) return null;
    let sum = 0, maxSum = -Infinity;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        maxSum = Math.max(sum, maxSum);
        if (sum < 0) sum = 0;
    }
    return maxSum;
};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));