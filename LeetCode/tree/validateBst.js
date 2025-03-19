// validate bst - leetcode - medium

// pseudocode:
// first check the root is null or not and validate. edge case. then
// make an another recursion fn separately
// pass node.val, min and max args. min as -Infinity and max as Infinity initially
// in that fn, first case is node not null
// then, if null, return true.
// then check, if the node.val <= min || node.val >= max, then return false
// next, use leftIsValid , to check, call the same fn as recursive
// with passing the current node.left, min and node.val as max
// same like rightIsValid. args will be, node.right, node.val and max.
// at the end, return isLeftValid && isRightValid. if both are true. then it will be valid bst

function checkBst(node, min, max) {
    if (!node) return true;

    if (node.val <= min || node.val >= max) return false;

    let isLeftValid = checkBst(node.left, min, node.val);
    let isRightValid = checkBst(node.right, node.val, max);

    return isLeftValid && isRightValid;
}

let isValidBST = (root) => {
    if (!root) return undefined;
    return checkBst(root, -Infinity, Infinity);
}


console.log(isValidBST([5, 1, 4, null, null, 3, 6]))
// console.log(isValidBst([2, 1, 3]))