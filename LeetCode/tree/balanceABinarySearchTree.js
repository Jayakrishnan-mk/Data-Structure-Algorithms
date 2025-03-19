
// balanceABinarySearchTree.js - leetcode - medium

//  pseudocode :
// for balancing this binary tree, first i need to use inorder traversal
// with doing this, i will get the sorted array of this tree
// after that, i can make an another fn for make the bst from sorted array
// for that, i need to take the mid point and create a node with that value
// for that 3 args to that fn, array, start and end. 0,len-1
// after that build the tree with recursive function with assigning node.left and right
// last return node. done 

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

function inOrderTraversal(node, array) {
    if (!node) return null;
    inOrderTraversal(node.left, array);
    array.push(node.val);
    inOrderTraversal(node.right, array);
}

function sortedArrayToBst(array, start, end) {
    if (start > end) return null;

    // Get the middle element and make it root
    let mid = Math.floor((start + end) / 2);
    let node = new TreeNode(array[mid]);

    // Recursively construct the left and right subtrees
    node.left = sortedArrayToBst(array, start, mid - 1);
    node.right = sortedArrayToBst(array, mid + 1, end);
    return node;
}

// Main function to balance the tree
var balanceBST = function (root) {
    if (!root) return null;
    let sorted = [];
    inOrderTraversal(root, sorted); // Get the sorted array from inorder traversal
    return sortedArrayToBst(sorted, 0, sorted.length - 1); // Rebuild balanced tree
};


//         ---> 5
//            /  \
//      ---> 3 -> 8
//          / \    \
//    ---> 2 -> 4 -> 10

console.log(balanceBST([5, 3, 8, 2, 4, 10])); // will work in leetcode
