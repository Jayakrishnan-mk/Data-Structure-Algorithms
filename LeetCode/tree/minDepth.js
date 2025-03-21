
// minimum depth of a binary tree - leetcode - easy

// return its minimum depth.
// The minimum depth is the number of nodes along the shortest path -
// from the root node down to the nearest leaf node.

// input:
// Input: [3,9,20,null,null,15,7]
//        3
//       / \
//      9  20
//        /  \
//      15   7

// Output: 2 ( 3 -> 9).

// dfs approach..........

// pseudocode:
// first check, root is null, return 0
// check the root.left is null, then return the fn with root.right + 1
// then check the root.right is null, then return the fn with root.left + 1
// then take 2 var leftHeight and rightHeight
// send node.left as leftHeight. and same like rightHeight
// check the math.min of height + 1
// return this result

let minDepth = (root) => {
    if (!root) return 0;
    // If the node has only one child, return the depth of the non-null child + 1.
    if (!root.left) return minDepth(root.right) + 1;
    if (!root.right) return minDepth(root.left) + 1;
    let leftHeight = minDepth(root.left);
    let rightHeight = minDepth(root.right);
    // If both children exist, compute the minimum of both heights.
    return Math.min(leftHeight, rightHeight) + 1;
}

console.log(minDepth([3, 9, 20, 15, 7]))