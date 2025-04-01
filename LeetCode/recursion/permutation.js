
// permutation - leetcode - medium

// ✅ Swap-based backtracking → More efficient (no extra space).

// pseudocode:
// create a result var as empty array
// make an iife recursion fn called backtrack or something
// pass the start value as 0 in args
// first check, starting the current mutation. means
// if start is equal to input array length, then push to result array
// in new array with destructure
// after that , make a for loop
// in there, swap the array[i] and array[start].
// after that call the backtrack recursion fn, and
// after that same swapping again. for undo swap.
// after  the loop, return the result.

var permute = function (nums) {
    let result = [];

    (function backTrack(start) {
        if (start === nums.length) {
            result.push([...nums]); // storing the current mutation
        }

        for (let i = start; i < nums.length; i++) {
            [nums[start], nums[i]] = [nums[i], nums[start]]; // Swap
            backTrack(start + 1);
            [nums[start], nums[i]] = [nums[i], nums[start]];   // Backtrack (undo swap)
        }
    })(0);
    return result;
};

console.log(permute([1, 2, 3]));

// ✅ Backtracking with used array → Easier to understand (but uses extra space).

// pseudocode:
// make a var result as an empty array
// make an iife fn backtrack and pass the args
// first arg - [], second - an array with nums.length and filled with false
// in recursion fn, take these as params - path and used
// first check in the fn is, if path.len is equal to input array.length
// then push the path as destructured to result array. and return
// bcs we found one valid permutation
// after that, make a for loop, and check , if used[i] is true, then continue
// skip the number if its already used. that's what we are doing here
// then, nums[i] push to the path array.
// after that, make this used[i] as true. because we need to mark this as used
// after that call this recursion fn
// atlast, unchoose this backtrack. pop from path.
// then make the used[i] as false again. means, reset the used state.
// after the fn, return result. done

// var permute = function (nums) {
//     let result = [];

//     (function backTrack(path, used) {
//         if (path.length === nums.length) {
//             result.push([...path]); // found a valid permutation.
//             return;
//         }

//         for (let i = 0; i < nums.length; i++) {
//             if (used[i]) continue;  // Skip if the number is already used

//             path.push(nums[i]); // Choose
//             used[i] = true;     // Mark as used

//             backTrack(path, used); // Explore

//             path.pop();            // Un-choose (backtrack)
//             used[i] = false;       // Reset used state
//         }
//     })([], Array(nums.length).fill(false));

//     return result;
// };