
// clone graph - leetcode - medium

// DFS - Recursion Approach.........

// the question is, input is the adjacency list of a graph
// with that, we need to create the copy of the same graph.

// pseudocode:
// first check the edge case, if input node is null, return null
// make a hashmap
// make a recursion fn. and invoke that, with the given input node.
// in that, first check, if the node has already in map obj, return the ref
// otherwise, first create the copy of node
// then add it to the cloned map obj.
// then only after that, make a for loop to loop the neighbors of the current node
// and push that neighbors to the copy.neighbors.
// after the loop, return this copy
// in the end, return this recursion fn invokation. done.



// /**
//  * Definition for a Node.
function Node(val, neighbors) {
    this.val = val;
    this.neighbors = neighbors || [];
};
//  */
//  */
var cloneGraph = function (node) {
    if (!node) return null;
    let clonedMap = new Map();

    function dfs(currNode) {
        if (!currNode) return null;
        if (clonedMap.has(currNode.val)) return (clonedMap.get(currNode.val));

        let copy = new Node(currNode.val);
        clonedMap.set(currNode.val, copy);

        for (let neighbor of currNode.neighbors) {
            copy.neighbors.push(dfs(neighbor));
        }
        return copy;
    }
    return dfs(node);
};

console.log(cloneGraph([[2, 4], [1, 3], [2, 4], [1, 3]]))