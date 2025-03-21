// same tree - leetcode - easy

// pseudocode:
// If both are null → ✅ Identical
// If only one is null → ❌ Not identical
// If values differ → ❌ Not identical
// Recursively check left and right subtrees

let isSameTree = (p, q) => {
    if (!p && !q) return true;
    if (!p || !q || p.val !== q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

console.log(isSameTree([1, 2, 3], [1, 2, 3]))