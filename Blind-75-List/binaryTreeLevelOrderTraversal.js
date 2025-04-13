
// binaryTreeLevelOrderTraversal - leetcode - medium

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// converting the input to a tree for working in vs code.
function buildTreee(arr) {
    if (!arr.length || arr[0] == null) return null;

    let root = new TreeNode(arr[0]);
    let queue = [root];
    let i = 1;

    while (queue.length && i < arr.length) {
        let node = queue.shift();

        if (arr[i] != null) {
            node.left = new TreeNode(arr[i]);
            queue.push(node.left);
        }
        i++;

        if (i < arr.length && arr[i] != null) {
            node.right = new TreeNode(arr[i]);
            queue.push(node.right);
        }
        i++;
    }

    return root;
}


// make a var level as 1 initially to setup the level of each row
// make a queue with starting value the array of root and level
// make a hashmap for adding the levels with values to map
// make a while loop.condition will be queue.shift
// inside that, take node and level from queue.shift
// and check, this level is inside map. if not, add this with empty array
// after the push the node.val to this levels array
// then if node.left is there, then add this to queue with level+1.
// same like node.right as well.
// after the loop, make a result array
// and loop this map with foreach and add the values to this map
// last, return this result array.

var levelOrder = function (root) {
    let level = 1;
    let queue = [[root, level]];
    let hm = new Map();

    while (queue.length) {
        let [node, level] = queue.shift();
        if (!hm.has(level)) hm.set(level, []);
        hm.get(level).push(node.val);

        if (node.left) queue.push([node.left, level + 1]);
        if (node.right) queue.push([node.right, level + 1]);
    }
    let res = [];
    hm.forEach((item) => {
        res.push(item);
    })
    return res;
};

let root = [3, 9, 20, null, null, 15, 7];
let input = buildTreee(root);
console.log(levelOrder(input))