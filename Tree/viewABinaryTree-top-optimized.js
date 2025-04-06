
// top view - bfs

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


// O(N) method........
let topViewTree = (root) => { // [1, 2, 3, 4, 5, null, 6];
    if (!root) return [];

    let hdMap = new Map();
    let queue = [[root, 0]];  // Pair: [node, horizontal distance]
    let minHd = 0, maxHd = 0;

    while (queue.length) {
        let [node, hd] = queue.shift();  // 0, 1

        if (!hdMap.has(hd)) hdMap.set(hd, node.val);

        minHd = Math.min(minHd, hd);
        maxHd = Math.max(maxHd, hd);

        if (node.left) queue.push([node.left, hd - 1]);
        if (node.right) queue.push([node.right, hd + 1]);
    }

    // Construct result from minHd to maxHd
    let result = [];
    for (let i = minHd; i <= maxHd; i++) {
        result.push(hdMap.get(i));
    }

    return result;
};

let input = [1, 2, 3, 4, 5, null, 6];
let root = buildTree(input);
console.log(topViewTree(root))



// O(N + W log W) method........
// let topViewTree = (root) => {
//     if (!root) return [];
//     let result = [];
//     let hd = new Map();

//     let queue = [[0, root]]; // 0, 1
//     while (queue.length) {
//         let [hor, node] = queue.shift(); // 0, 1

//         if (!hd.has(hor)) hd.set(hor, node.val);

//         if (node.left) queue.push([hor - 1, node.left]);
//         if (node.right) queue.push([hor + 1, node.right]);
//     }
//     console.log(hd);

//     return [...hd.keys()].sort((a, b) => a - b).map(hor => hd.get(hor));

// }
