
// viewABinaryTree-verticalOrderTraversal.js

// 🌿 Vertical Order Traversal – Intuition
// Imagine standing in front of a tree and looking vertically-
//  down each column (horizontal distance).
// At every vertical column, we collect all nodes that fall under-
//  that same horizontal distance (hd), from top to bottom.

// Input Tree:        [3, 9, 20, null, null, 15, 7]

//         3
//        / \
//       9  20
//          / \
//         15  7

// output - [[9], [3, 15], [20], [7]]

// Horizontal distances:
//     9 → -1
//     3 →  0
//    15 →  0
//    20 → +1
//     7 → +2

// Vertical Order Output:
// [
//   [9],        // hd -1
//   [3, 15],    // hd 0
//   [20],       // hd +1
//   [7]         // hd +2
// ]

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// converting the input to a tree for working in vs code.
function buildTree(arr) {
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


let verticalOrderTraversal = (root) => { // [[9], [3, 15], [20], [7]]
    let queue = [[root, 0]];
    let maxHd = 0, minHd = 0;
    let hd = new Map();

    while (queue.length) {
        let [node, horDist] = queue.shift();

        if (!hd.has(horDist)) {
            hd.set(horDist, []);
        }
        hd.get(horDist).push(node.val)

        maxHd = Math.max(maxHd, horDist);
        minHd = Math.min(minHd, horDist);

        if (node.left) queue.push([node.left, horDist - 1]);
        if (node.right) queue.push([node.right, horDist + 1]);
    }

    let result = [];
    for (let i = minHd; i <= maxHd; i++) {
        result.push(hd.get(i));
    }
    return result;
}

let input = [3, 9, 20, null, null, 15, 7];
let root = buildTree(input);
console.log(verticalOrderTraversal(root));
