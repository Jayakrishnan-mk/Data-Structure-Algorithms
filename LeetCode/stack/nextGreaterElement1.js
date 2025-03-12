// nextGreaterElement1 - leet code - easy


// efficient way...

// pseudocode:
// loop the second array using for of
// use one hashmap and one stack
// check if the stack is empty or not. if its empty, just push the value
// if stack is not empty and stack[stack.length -1] < num
// then add that to stack.pop with hashmap. bcs we found the stack's smaller values next greater.
// continue the loop till end. 
// after the loop, loop the first array using array.map
// if the item is in the hashmap, then take that value(next greater element of that value), otherwise set to -1
// return array

// Input: array1 = [4,1,2], array2 = [1,3,4,2]
// Output: [-1,3,-1]

var nextGreaterElement = function (array1, array2) {
    let hm = new Map();
    let stack = [];  //  monotonic decreasing stack

    for (let item of array2) {
        // If we encounter a number greater than the top of the stack, 
        // we have found the next greater element for that smaller number.
        if (stack.length > 0 && stack[stack.length - 1] < item) {
            // We pop the smaller number from the stack.
            // The next greater element for that popped number is num, so we store it in hashmap(hm).
            // After processing the stack, we push num onto the stack.
            hm.set(stack.pop(), item);
        }
        stack.push(item);
    }

    return array1.map(item => (hm.get(item) || -1));
}

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]))
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]))

// own way...............
// pseudocode:
// make a loop i
// inside another loop j
// check with this i to j
// create a flag and stack
// when the i === j, check which is the next greater element in the second array
// add that to stack. if not , add -1.
// after the i loop, return the stack

// var nextGreaterElement = function (array1, array2) {
//     let stack = [];
//     let flag = false;
//     for (let i = 0; i < array1.length; i++) {
//         for (let j = 0; j < array2.length; j++) {
//             if (array1[i] === array2[j]) {
//                 flag = true;
//             }
//             if (flag) {
//                 if (array2[j] > array1[i]) {
//                     stack.push(array2[j]);
//                     break;
//                 }
//             }
//             if (flag && j === array2.length - 1) {
//                 stack.push(-1);
//             }
//         }
//         flag = false;
//     }
//     return stack;
// };

// console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]))
// console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]))