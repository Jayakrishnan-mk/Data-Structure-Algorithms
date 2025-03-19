// maxDepth - leetcode - easy

// dfs approach

// pseudocode:
// first check - the root not null, if null , return 0
// then , use 2 vars, leftside and rightside with passing root.left and root.right as recursion
// after that, check these both with math.max and add + 1 , and return the sum. that will be the max depth.

let maxDepth = (root) => {
    if (!root) return 0;

    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);
    return Math.max(leftDepth, rightDepth) + 1;
}

console.log(maxDepth([2, 1, 3])); // output will be 2. (only work in leetcode)