// height of a binary tree

// return the height of the tree.
// The height of a tree is the number of edges on the longest path from the root to a leaf node.

// input :
//       1
//      / \
//     2   3
//    / \
//   4   5

// pseudocode:
// first check - root is null, then return 0.
// use the same fn as recursion.
// take leftHeight and rightHeight with passing node.left and right to this fn
// and check the max with these two. and add +1.
// then return this max  

let heightOfTree = (root) => {
    if (!root) return 0;

    let leftHeight = heightOfTree(root.left);
    let rightHeight = heightOfTree(root.right);

    let max = Math.max(leftHeight, rightHeight) + 1;
    return max;
}

console.log(heightOfTree([1, 2, 3, 4, 5]))