
// clone graph - leetcode - medium

// BFS - Using queue Approach.........

// pseudocode:
// first check the edge case, if input node is null, return null
// make a hashmap and a queue. in queue add the input node at first
// then add this node to the hashmap also
// after that, use a while for looping the queue
// take the queue.shift to a var current
// with this current, take the clonedNode to a var.
// after that, loop the neighbors of this current.
// and check, is this neighbor available in cloned map. if its not, then-
// add it to cloned. and push this to queue.
// after that, push this to clonedNode.neighbors, with checking the neighbor value
// atlast, after the loop, return this node from retrieve from the cloned.
// done. 


// /**
//  * Definition for a Node.
function Node(val, neighbors) {
    this.val = val;
    this.neighbors = neighbors || [];
};
//  */
var cloneGraph = function (node) {
    if (!node) return null;
    let cloned = new Map();
    let queue = [node];

    // let clonedNode = new Node(node.val); // return this item
    cloned.set(node, new Node(node.val));
    while (queue.length) {
        let current = queue.shift();

        let clonedNode = cloned.get(current); // accessing the real copy (cloned node) to return

        for (let neighbor of current.neighbors) {
            if (!cloned.has(neighbor)) {
                cloned.set(neighbor, new Node(neighbor.val));
                queue.push(neighbor);
            }
            clonedNode.neighbors.push(cloned.get(neighbor));
        }
    }
    return cloned.get(node);
};


console.log(cloneGraph([[2, 4], [1, 3], [2, 4], [1, 3]]))