


function maxSubArraySum(arr, n) {
    if (n > arr.length) return undefined;

    let temp = 0;
    let maxSum = 0;

    // this loop will only calculate the first 3 elements sum...
    for (let i = 0; i < n; i++) {
        maxSum += arr[i];
    }

    // this is the main loop....
    temp = maxSum;
    for (let j = n; j < arr.length; j++) {
        temp = temp - arr[j-n] + arr[j];
        maxSum = Math.max(temp, maxSum);
    }
    return maxSum;
}

console.log(maxSubArraySum([1, 2, 3, 5, 6, 6, 7, 3, 1], 3))
// console.log(maxSubArraySum([-1, -2, -3, -5, -6, -6, -7, -3, -1], 3))
