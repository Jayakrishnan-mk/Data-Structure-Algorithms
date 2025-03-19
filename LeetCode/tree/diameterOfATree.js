// diameter of a tree - leetcode - easy

// pseudocode:
// check the edge case, root is null, return 0
// make a var max
// make a recursion fn, and check the node is not null as base case
// then, use left and right vars with calling the recursion fn as node.left and node.right. 
// after that, find max with left+right and max. and assign to max
// after , return the max of left or right comparison with adding + 1
// invoke this recursion fn
// return the max

let treeDiameter = (root) => {
    if (!root) return 0; // edge case
    let maxDiameter = 0;

    function dfs(node) {
        if (!node) return 0; // base case

        let leftHeight = dfs(node.left); // Recurse on left subtree
        let rightHeight = dfs(node.right); // Recurse on right subtree

        // The diameter at this node is the sum of left and right subtree heights
        maxDiameter = Math.max(maxDiameter, leftHeight + rightHeight);

        // Return the height of the current node (max of left or right subtree + 1)
        return Math.max(leftHeight, rightHeight) + 1;
    }
    dfs(root); // Start DFS from the root
    return maxDiameter; // Return the maximum diameter found
}
console.log(treeDiameter([1, 2, 3, 4, 5]))