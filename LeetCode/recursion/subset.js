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
var subsets = function(nums) {
    let result = [];
    
    function backtrack(start, subset) {
        console.log("Before adding to result:", subset);
        result.push([...subset]);  // Store the current subset
        console.log("Added to result:", result);
        
        for (let i = start; i < nums.length; i++) {
            subset.push(nums[i]);  // Include nums[i] in the subset
            console.log("After push:", subset);
            
            backtrack(i + 1, subset);  // Explore further with this element
            
            subset.pop();  // Backtrack (remove last element)
            console.log("After pop:", subset);
        }
    }

    backtrack(0, []);
    return result;
};

console.log(subsets([1, 2]));
