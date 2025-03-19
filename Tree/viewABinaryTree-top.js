// viewing a BinaryTree - top view

// view:       // input - [1, 2, 3, 4, 5, null, 6]
//        1
//       / \
//      2   3
//     / \   \
//    4   5   6

//  output : [4, 2, 1, 3, 6]

// pseudocode:
// edge case - if root is null - return [];
// here we're using one hd(horizontal distance) variable with the node inside queue
// take an array as queue [] and push the root with 0 as an array inside this queue
// then take a hashmap
// make a while loop with condition queue.length
// take the vars node and hd and assign queue.shift() to this.
// after that, check, this hd is in the hashmap or not.
// if not, add this hd with the node
// if it is already there, then we dont need that. nothing to do.
// after that, check the node.left is there, if it is, then queue.push that node with hd
// same like node.right also. but for left, the hd will be -1 and for right, +1.
// after the loop, take the keys of the map, add it to an array,-
// now this keys means that hds, sort with this in ascending order
//  then sort that keys in asc order. then, use map to map that array- 
// then take the values of that hd. and return this result.done. 

// approach :- BFS + Horizontal Distance .........

let topView = (root) => {
    if (!root) return [];

    let map = new Map();
    let queue = [[root, 0]];

    while (queue.length) {
        let [node, hd] = queue.shift(); // here hd means, the horizontal distance

        if (!map.has(hd)) map.set(hd, node.val); // taking only the first item from the horizontal distance

        if (node.left) queue.push([node.left, hd - 1]);
        if (node.right) queue.push([node.right, hd + 1]);
    }

    return [...map.keys()].sort((a, b) => a - b).map(hd => map.get(hd));
}

console.log(topView([1, 2, 3, 4, 5, null, 6]))
