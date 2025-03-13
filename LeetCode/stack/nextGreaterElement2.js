// nextGreaterElement2 - leet code- medium

// Array is circular → We can wrap around
// Monotonic Stack (O(n)) Approach.

// pseudocode:
// make a stack and var n = array.length. and one result array with fill -1 with the length n
// make a loop. this loops i is the 2*n - 1. bcs, its a circular array. so we need to wrap around this.
// for that we need to take the double of array length as i.
// make a num var for setting the mod value - array[i%n]
// check the condition in a while loop -
//  if the stack greater than 0 and last item of stack less than the num value
// if it is, then pop the stack
// then next condition, if i < n , then add it to result [i]
// the value of result[i] will be,
// if stack greater than 0, then top value of stack. otherwise fill with -1.
// at last push the num to stack
// after the loop, return the result

var nextGreaterElements = function (array) {
    let stack = []; // monotonic stack
    let n = array.length;
    let result = new Array(n).fill(-1);

    for (let i = (2 * n) - 1; i >= 0; i--) {  // circular array
        let num = array[i % n];              // Circular indexing

        // Remove smaller elements
        while (stack.length > 0 && stack[stack.length - 1] <= num) {
            stack.pop();
        }

        // If stack is not empty, the top is the next greater element
        if (i < n) {    // means the second time array iteration started.
            result[i] = stack.length > 0 ? stack[stack.length - 1] : -1;
        }
        // Push current element to stack
        stack.push(num);
    }
    return result;
};

console.log(nextGreaterElements([1, 2, 1]));