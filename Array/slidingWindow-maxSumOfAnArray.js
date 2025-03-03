// write a fn called maxSubArraySum which accepts an array of integers and a number called n.
// the fn should calculate the maximum sum of n consecutive elements in the array.

// make a fn maxSubArraySum
// call that fn with passing an integer array
// use the sliding window algorithm for finding the sum of elements
// return the result

function maxSubArraySum(arr, n) {
    if (n > arr.length) return undefined;

    let temp = 0;
    let maxSum = 0;

    for (let i = 0; i < n; i++) {
        maxSum += arr[i];
    }

    temp = maxSum;
    for (let j = n; j < arr.length; j++) {
        temp = temp - arr[j-n] + arr[j];
        maxSum = Math.max(temp, maxSum);
    }
    return maxSum;
}

console.log(maxSubArraySum([1, 2, 3, 5, 6, 6, 7, 3, 1], 3))
// console.log(maxSubArraySum([-1, -2, -3, -5, -6, -6, -7, -3, -1], 3))