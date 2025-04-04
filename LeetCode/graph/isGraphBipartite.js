
// isGraphBipartite - leetcode - medium

// Using Bfs traversal ......
// here, we're doing is, we're trying to color 2 different color for adjacent nodes
// if any color adjacent nodes has same color, it means the graph is not bipartite.
// we'll return false.

// pseudocode:
// make an array for coloring
// the size of the array will be the graph.length. and fill this with -1
// make a for loop and loop the graph. send the i to a bfs separate fn.
// in this fn, make a queue and start this queue with the params start
// in starting, make the color[start] as 0. lets start with color 0.
// and make a while loop, to check the queue.length > 0
// in this loop, shift the queue item to a node
// and traverse the adjacent nodes of this node with a for of
// and check, if the color of the neighbor is equal to -1, then 
// give the color 1 - color[node] to that color[neighbor]
// and push this neighbor to the queue
// and in else if, the color [neighbor] is equal to the color[node]
// then return false. because it will be the adjacent nodes.
// after this for of and while, return true. 
// lets come back, in our first for loop, we will get the response from this fn
// if this response is false, then return false from there
// otherwise after the loop, return true. done.

var isBipartite = function (graph) {
    let color = Array(graph.length).fill(-1);

    function bfs(start) {
        let queue = [start];
        color[start] = 0;  // Start coloring with color 0

        while (queue.length) {
            let node = queue.shift();

            for (let neighbor of graph[node]) {
                if (color[neighbor] === -1) {
                    // Color the neighbor with opposite color
                    color[neighbor] = 1 - color[node];
                    queue.push(neighbor);
                } else if (color[neighbor] === color[node]) {
                    // Same color as current node, so not bipartite
                    return false;
                }
            }
        }
        return true;
    }

    for (let i = 0; i < graph.length; i++) {
        if (color[i] === -1) { // If the node is unvisited
            if (!bfs(i)) {
                return false;
            };
        }
    }
    return true;
};

console.log(isBipartite([[1, 3], [0, 2], [1, 3], [0, 2]]))
// console.log(isBipartite([[1, 2, 3], [0, 2], [0, 1, 3], [0, 2]]))