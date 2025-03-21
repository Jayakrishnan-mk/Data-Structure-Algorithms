// KthSmallestElement - leetcode - medium

// use inorder traversal for getting the smallest k'th value
// pseudocode:
// check first edge case is root is null, then return 0
// then use the recursion, to check the left side.
// after that add it to the result array
// then right side
// after the loop, return the result array's k'th value

var kthSmallest = function (root, k) {
    if (!root) return 0;
    let result = [];

    function traverse(node) {
        if (node.left) traverse(node.left);
        result.push(node.val);
        if (node.right) traverse(node.right);
    }
    traverse(root);
    return result[k - 1];
};

console.log(kthSmallest([5, 3, 6, 2, 4, null, null, 1], 3))