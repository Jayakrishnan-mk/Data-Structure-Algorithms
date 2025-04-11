
// combination sum - leetcode - medium

// using backtracking, recursion, dp - DFS

// pseudocode:

// pseudocode:
// make a var result as [];
// create a recursion fn and pass the initial values as 0,[],0
// take the params as i, currArr, total
// in the fn, add the 3 base cases
// first, if, the total === target, then push the copy of currArr to result and, return;
// second and third, 
// total > target || i >= candidates.length, then return
// now, use dfs approach to do the left side
// take the i, so, currArr.push(candidates[i]), and 
// call dfs with i, currArr, total+candidates[i];
// after that right side,
// for right, we dont need the last added value. so pop from currArray
// and call dfs. the args are, i+1, currArr, total 
// after the loop, return result.

var combinationSum = function (candidates, target) {
    let result = [];

    (function dfs(i, currArr, total) {
        // 3 base cases...
        if (total === target) {
            result.push([...currArr]); // pushing the copy
            return;
        }

        if (total > target || i >= candidates.length) return;

        // left side
        currArr.push(candidates[i]);
        dfs(i, currArr, total + candidates[i]);

        // right side
        currArr.pop();
        dfs(i + 1, currArr, total);
    })(0, [], 0)
    return result;
};

console.log(combinationSum(candidates = [2, 3, 6, 7], target = 7))