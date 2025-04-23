
// cloneGraph - leetcode - medium


//  pseudocode: bfs approach............
// first check the edge case, if node is null, return node.
// make a queue and a map. in queue add the node initially
// add this node to the map with creating copy node
// start a while loop, with condition queue.length
// and take the current node from queue.shift()
// then take the var copyNode and retrieve that from map with current node
// then loop the neighbors of the current node
// if its not in map, add it with creating new node.
// and add that neighbor to the queue
// after that, add this new created neighbor to the copyNode's neighbors array
// after all loops , return the copyNode.

var cloneGraph = function (node) {
    if (!node) return node;
    let map = new Map(), queue = [node];
    map.set(node, new _Node(node.val));

    while (queue.length) {
        let curr = queue.shift();

        let copyNode = map.get(curr);

        for (let neighbor of curr.neighbors) {
            if (!map.has(neighbor)) {
                map.set(neighbor, new _Node(neighbor.val));
                queue.push(neighbor);
            }
            copyNode.neighbors.push(map.get(neighbor));
        }
    }
    return map.get(node);
};