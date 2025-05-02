
// isGraphBipartite - leetcode - medium

// Using BFS traversal ......
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

// var isBipartite = function (graph) {
//     let color = Array(graph.length).fill(-1);

//     function bfs(start) {
//         let queue = [start];
//         color[start] = 0;  // Start coloring with color 0

//         while (queue.length) {
//             let node = queue.shift();

//             for (let neighbor of graph[node]) {
//                 if (color[neighbor] === -1) {
//                     // Color the neighbor with opposite color
//                     color[neighbor] = 1 - color[node];
//                     queue.push(neighbor);
//                 } else if (color[neighbor] === color[node]) {
//                     // Same color as current node, so not bipartite
//                     return false;
//                 }
//             }
//         }
//         return true;
//     }

//     for (let i = 0; i < graph.length; i++) {
//         if (color[i] === -1) { // If the node is unvisited
//             if (!bfs(i)) {
//                 return false;
//             };
//         }
//     }
//     return true;
// };

// console.log(isBipartite([[1, 3], [0, 2], [1, 3], [0, 2]]))
// console.log(isBipartite([[1, 2, 3], [0, 2], [0, 1, 3], [0, 2]]))


// Using DFS...............
// create a graph.length var n
// and make a var colors with -1 prefilled array witn n size
// then create a dfs fn, which taking the parameters node and color
// and call this dfs fn inside a loop
// the loop will be for loop in < n condition and inside,
// check the colors[i] is === -1. if it is, pass that i and 0 in a condition-
// that, in if condition the return is false, in that manner. if getting false -
// in response, then this false+false will becomes true and return false inside this condition
// after that, inside the dfs recursion fn,
// the color param value assign to colors[node]
// then use a loop for traversing the neighbors of this node in the graph
// and check the neighbor value in colors is -1, 
// if it is, call this dfs with the neighbor and 1-color.and-
// and use this in an if condition with checking that falsy sttment. if the response is false-
// then false + false equal true, then return false.
// in the else if condition, check the neighbor value in colors is equals to color, 
// if it is, directly return false
// out of this for loop, return true.
// at the end of the all loops also, return true.


var isBipartite = function (graph) {
    let n = graph.length;
    let colors = new Array(graph.length).fill(-1);

    function dfs(node, color) {
        colors[node] = color;

        for (let neighbor of graph[node]) {
            if (colors[neighbor] === -1) {
                if (!dfs(neighbor, 1 - color)) return false;
            }
            else if (colors[neighbor] === color) return false;
        }
        return true;
    }

    for (let i = 0; i < n; i++) {
        if (colors[i] === -1) {
            if (!dfs(i, 0)) return false;
        }
    }
    return true;
};


console.log(isBipartite([[1, 3], [0, 2], [1, 3], [0, 2]]))