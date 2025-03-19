// balancedBinaryTree - leetcode - easy

// pseudocode:
// check the depth is greater than one or not with left and right
// for that , use post order dfs
// then check with the height of the left and right side subtrees 
// if its greater than 1, return false 
// otherwise true

let isBalanced = (root) => {

    function dfs(node) {
        if (!node) return 0;

        // post order traversal - dfs - left, right, root
        let leftHeight = dfs(node.left);
        if (leftHeight === -1) return -1; // left subtree is unbalanced

        let rightHeight = dfs(node.right);
        if (rightHeight === -1) return -1; // right subtree is unbalanced

        if (Math.abs(leftHeight - rightHeight) > 1) return -1; // difference b/w trees depth

        return Math.max(leftHeight, rightHeight) + 1; // return height
    }
    return dfs(root) !== -1 // if dfs returns -1, tree is unbalanced...
}

console.log(isBalanced([3, 9, 20, 15, 17]))
// console.log(isBalanced([1, 2, 2, 3, 3, null, null, 4, 4]))