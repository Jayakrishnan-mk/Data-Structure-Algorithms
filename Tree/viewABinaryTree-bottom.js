// viewing a BinaryTree - bottom view

// view:       // input - [1, 2, 3, 4, 5, null, 6]
//        1
//       / \
//      2   3
//     / \   \
//    4   5   6

//  output : [4, 2, 5, 3, 6]

// pseudocode:
// first, check the edge case - root is null, return []
// then make a queue with an array of [root , 0]. push this to queue
// make a hashmap
// make a while loop with checking queue.length
// take the vars node and hd from queue.shift()
// now set the hd with node to map. if it is, then overwrite.we need last node
// then check node.left is there, if it is, then add it to queue with hd - 1
// same like node.right. if it is, add it with hd + 1
// after the loop, take the keys of the map, add it to an array,-
// now this keys means that hds, sort with this in ascending order
//  then sort that keys in asc order. then, use map to map that array- 
// then take the values of that hd. and return this result.done. 

// approach :- BFS + Horizontal Distance .........

let bottomView = (root) => {
    if (!root) return [];
    let queue = [[root, 0]];
    let hashMap = new Map();

    while (queue.length) {
        let [node, hd] = queue.shift();

        hashMap.set(hd, node); // if already this hd is there, then overwrite. 
        // we need the last hd and node here.

        if (node.left) queue.push([node.left, hd - 1])
        if (node.right) queue.push([node.right, hd + 1])
    }
    return [...hashMap.keys()].sort((a, b) => a - b).map(hd => hashMap.get(hd));
}

console.log(bottomView([1, 2, 3, 4, 5, null, 6]))
