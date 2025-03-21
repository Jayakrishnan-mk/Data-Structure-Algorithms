// LCA - leetcode - medium
// Lowest Common Ancestor

// pseudocode:
// if(!root) return null - base case
// make an another fn findLca for recursion
// if root equals p or q , return root.
// search in both left and right subtrees using dfs
// if p is the ancestor of q, return p
// if(!p || !q) is not in the tree, then return null
// Call findLCA(root.left, p, q) to check the left subtree.
// Call findLCA(root.right, p, q) to check the right subtree.
// If p and q are found in different subtrees, then root is the LCA.
// If both are in the left subtree, LCA is in the left.
// If both are in the right subtree, LCA is in the right.
// return the ancestor

// Find LCA(7, 4), LCA(5, 1), and LCA(6, 8)

//             3
//            / \
//           5   1
//         / \  / \
//        6  2 0  8
//          /\
//        7   4

let lowestComAncestor = (root, p, q) => {
    if (!root || root === p || root === q) return root; // base case

    let left = lowestComAncestor(root.left, p, q);
    let right = lowestComAncestor(root.right, p, q);

    if (left && right) return root;  // p and q found in different subtrees
    return left ? left : right; // Return the non-null subtree

}

console.log(lowestComAncestor([3, 5, 1, 6, 2, 0, 8, 7, 4], 7, 4))