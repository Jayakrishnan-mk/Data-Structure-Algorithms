// subsets - leetcode - medium

// pseudocode:
// start with a var result as empty array inside array - [[]]
// starting with this empty array
// then use a for loop to loop the nums
// create a var to assign result.map of subsets. add new item to subset
// push this new var to result with destructuring the subset.
// after the loop, return result


// let subsets = (nums) => {
//     let result = [[]];
//     for (let num of nums) {
//         let newSubset = result.map(subset => [...subset, num]);
//         result.push(...newSubset);
//     }
//     return result;
// }

// console.log(subsets([1, 2, 3]))

// backtracking algorithm.......................
// var subsets = function (nums) {
//     let result = [];

//     function backtrack(start, subset) {
//         console.log("Before adding to result:", subset);
//         result.push([...subset]);  // Store the current subset
//         console.log("Added to result:", result);

//         for (let i = start; i < nums.length; i++) {
//             subset.push(nums[i]);  // Include nums[i] in the subset
//             console.log("After push:", subset);

//             backtrack(i + 1, subset);  // Explore further with this element

//             subset.pop();  // Backtrack (remove last element)
//             console.log("After pop:", subset);
//         }
//     }

//     backtrack(0, []);
//     return result;
// };

// console.log(subsets([1, 2]));


// Back tracking with recursion...........


// subset - pseudocode:
// make a var result with an empty array .
// make a recursion fn
// invoke fn with 0 and [].
// take the params start and path respectively.
// push the path array to result with destructure in  an array
// then start a for loop
// condition will be - i = start, and i<n. means nums.length
// add the nums[i] to the path.
// then make the recursion fn call. with passing i+1 and path.
// after that, path.pop().
// after the loop, return result;

var subsets = function (nums) {

    let result = [];

    function backtrack(start, path) {
        result.push([...path]);  // Store current subset
        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]);  // Choose an element
            backtrack(i + 1, path);  // Recurse with next elements
            path.pop();  // Backtrack (undo last choice)
        }
    }

    backtrack(0, []);
    return result;
};

console.log(subsets([1, 2, 3]));

// result = [ [], [1], [1,2] , [1,2,3] , [1,3]   ]
// path = [ [ 1 ]  ]
// i = 2
// start = 3
