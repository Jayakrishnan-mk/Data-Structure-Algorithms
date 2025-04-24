
// cloneGraph - leetcode - medium


//  pseudocode: dfs approach............
// create a visited map
// first edge case, if node null, return node
// and use a dfs recursion fn
// call that fn immediatedly with node
// and return that invokation
// inside fn, check, the map has the node. if it is, return the map's copied node.
// if not, create copiednode and add it to map
// then, loop the neighbors of that node
// and call the recursion fn with that neighbor while pushing that to the copied node's neighbors array
// after the loop, return the copied node.


var cloneGraph = function (node) {
    if (!node) return node;
    let map = new Map();

    function dfs(curr) {
        if (map.has(curr)) {
            return map.get(curr);
        }
        let copiedNode = new _Node(curr.val);
        map.set(curr, copiedNode);

        for (let neighbor of curr.neighbors) {
            copiedNode.neighbors.push(dfs(neighbor));
        }

        return copiedNode;
    }
    return dfs(node);
}