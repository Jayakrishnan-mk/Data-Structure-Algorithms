
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

// pseudocode:
// take vars result and deque with empty arrays
// make a loop with input array
// inside loop, first check - the window is outside or not-
// if(deque.length > 0 && deque[0] <= i-k) 
// if it is, then shift(remove from start of deque).
// second check (while loop)- if the nums[last index of deque] is greater or not with current nums[i]-
// if(deque.length > 0 && nums[deque[deque.length-1]] <= nums[i])
// if it is, then pop deque. till the end of the smaller values, continue popping
// (removing the smaller values from the current window)
// take the new greater element of the window- deque.push(i) 
// atlast, check the window is started, - with the check if(i>= k-1), 
// if it is, start to push the nums[deque[0]] to the result array

let maxSlidingWindow = (nums, k) => {
    let result = [];
    let deque = []; // This will store indices of potential max elements in the window

    for (let i = 0; i < nums.length; i++) {
        // Step 1: Remove indices from the deque if they are out of the current window
        if (deque.length > 0 && deque[0] <= i - k) {
            deque.shift(); // Remove from front if it's out of the window
        }

        // Step 2: Remove elements from the back of deque that are smaller than the current element
        while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i]) {
            deque.pop(); // removing all smaller values from the end. with this,we're making the starting position index as big value
        }

        deque.push(i)  // Step 3: Add the current index to the deque

        // Step 4: Add the maximum value of the window (front of the deque) to the result
        if (i >= k - 1) {
            result.push(nums[deque[0]])  // The largest element in the window is at the front of the deque
        }
    }
    return result;
}

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));



// brute force. will not work in bigger arrays.
// pseudocode:
// make a loop of input array
// take 2 vars left and max. left will be 0 initially
// and move the left as per the input window in every iteration
// and add the max value to the result array
// return result

// let maxSlidingWindow = (nums, k) => {
//     let max = -Infinity;
//     let result = [];
//     for (let i = 0; i <= nums.length - k; i++) {
//         for (let j = i; j < k + i; j++) {
//             console.log('nums', nums[j])
//             console.log('max', max)
//             max = Math.max(max, nums[j]);
//         }
//         result.push(max);
//         max = -Infinity;
//     }
//     return result;
// }

// console.log(maxSlidingWindow([1, -1], 1))
// console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))