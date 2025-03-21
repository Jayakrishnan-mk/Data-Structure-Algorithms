// maxDepth / height of a binary tree - leetcode - easy

// return the height of the tree.
// The height of a tree is the number of edges on the longest path from the root to a leaf node.

// input :
//       1
//      / \
//     2   3
//    / \
//   4   5

// output will be 3. (4->2->1  /  5->2->1)

// dfs approach.............

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

console.log(maxDepth([1, 2, 3, 4, 5])); // output will be 3. (only work in leetcode)