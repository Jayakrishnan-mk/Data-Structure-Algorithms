// binaryTreeZigZagLevelOrderTraversal - leetcode - medium

// pseudocode:
// make  a var result as an empty array
// create a iife recursion fn with passing root node and a level as 0 initially
// in recursion fn, base case will be node is null, then return
// first check the result has result[level]. if it is, directly push the node val
// otherwise create an array and push to this level
// after that, use recursion fn as node.left and node.right respectively
// after the recursion fn, use a map fn to traverse the result array
// in that, take the index in map as second arg, and check-
// if the index is odd, then reverse the item and return.
// else , also just return the same item.
// return this new array 

var zigzagLevelOrder = function (root) {
    let result = [];

    (function lot(node, level) {
        if (!node) return null;
        if (result[level]) {
            result[level].push(node.val);
        } else {
            result[level] = [node.val];
        }

        lot(node.left, level + 1);
        lot(node.right, level + 1);
    })(root, 0);

    result = result.map((bucket, index) => {
        if (index % 2) { // if it's odd, reverse
            return bucket.reverse();
        } else return bucket;
    })
    return result;
};

console.log(zigzagLevelOrder(root = [3, 9, 20, null, null, 15, 7]))