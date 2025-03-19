// invertBinaryTree - leetcode - easy

// pseudocode:
// first edge case, if root is null, return null
// use temp var and swap with root.left and root.right
// then call the root.left and right recursively
// after that, return the root. done


var invertTree = function (root) {
    if (!root) return null; // Base case: if node is null, return null

    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    invertTree(root.left);
    invertTree(root.right);
    return root;
};
console.log(invertTree([3, 1, 4])) // output 3,4,1 . only works in leetcode.