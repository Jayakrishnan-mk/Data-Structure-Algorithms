
// squares of a sorted array

//  O(n) Optimize Approach (Two Pointers)


var sortedSquares = function (nums) {
    let first = 0, last = nums.length - 1;
    let result = Array(nums.length);
    let index = nums.length - 1;

    while (first <= last) {
        let firstVal = nums[first] * nums[first];
        let lastVal = nums[last] * nums[last];

        if (firstVal >= lastVal) {
            result[index] = firstVal;
            first++;
        } else {
            result[index] = lastVal;
            last--;
        }
        index--;
    }
    return result;
}

console.log(sortedSquares([-7, -3, 2, 3, 11]))
// Output: [4,9,9,49,121]


// =================================================

// simple approach - easy way - O(N log N)

// square every element. and sort the squared array in asc. return.

// var sortedSquares = function (nums) {
//    for(let i = 0; i<nums.length; i++) {
//        nums[i] = nums[i] * nums[i];
//    }
    
//     return nums.sort((a,b) => a-b);
// }

