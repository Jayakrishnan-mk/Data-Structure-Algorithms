
// slidingWindowMaximum - leet code - hard

//      Input: array = [1,3,-1,-3,5,3,6,7], k = 3
//      Output: [3,3,5,5,6,7]
//      Explanation:
//      Window position                Max
//      ---------------               -----
//      [1  3  -1] -3  5  3  6  7       3
//       1 [3  -1  -3] 5  3  6  7       3
//       1  3 [-1  -3  5] 3  6  7       5
//       1  3  -1 [-3  5  3] 6  7       5
//       1  3  -1  -3 [5  3  6] 7       6
//       1  3  -1  -3  5 [3  6  7]      7

// pseudocode:        Brute force .
// make a loop
// use sliding window method
// use one inner loop and check-
// left will be 0 and window length is k
// take the maxValue and push it to an array and move it
// move the left pointer.
// when the left pointer reaches array.length - 3, break loop
// return the array

var maxSlidingWindow = function (array, k) {
    if (array.length === 0) return [];
    if (array.length === 1) return [array[0]];

    let result = [];
    for (let i = 0; i <= array.length - k; i++) {
        let max = -Infinity; // Reset max for each window
        for (let j = i; j < i + k; j++) {
            max = Math.max(array[j], max);
        }
        result.push(max);
    }
    return result;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))
console.log(maxSlidingWindow([1, -1], 1))