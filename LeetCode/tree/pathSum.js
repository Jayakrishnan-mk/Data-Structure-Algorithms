
// path sum - leetcode - easy

// input:
//  root = [5,4,8,11,null,13,4,7,2,null,null,null,1], 
// targetSum = 22
var hasPathSum = function (root, targetSum) {
    if (!root) return false;

    function dfs(node, remainingSum) {
        if (!node) return false;

        if (!node.left && !node.right) {
            return remainingSum - node.val === 0
        }
        let newSum = remainingSum - node.val;
        return dfs(node.left, newSum) || dfs(node.right, newSum);

    }
    return dfs(root, targetSum);
};

