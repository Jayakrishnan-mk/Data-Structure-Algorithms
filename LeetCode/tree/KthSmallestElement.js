// KthSmallestElement - leetcode - medium

// use inorder traversal for getting the smallest k'th value
// pseudocode:
// check first edge case is root is null, then return 0
// then use the recursion, to check the left side.
// after that add it to the result 
// then right side
// after the loop, return the result

let kthSmallest = (root, k) => {
    let count = 0;
    let result;
    function traverse(node) {
        if (!node) return null;

        if (node.left) traverse(node.left);
        count++;
        if (count === k) {
            result = node.val;
            return;
        }
        if (node.right) traverse(node.right);
    }
    traverse(root);
    return result;
}

console.log(kthSmallest([3, 1, 4, null, 2], 1))
// console.log(kthSmallest([5, 3, 6, 2, 4, null, null, 1], 3))