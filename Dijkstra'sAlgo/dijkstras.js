
// dijkstra's algo

// Overall Complexity: O((V + E) log V)

// pseudocode:
// make a priority queue - enqueue, dequeue, sort(use bubble up)
// make a weighted graph - addVertex, addEdge, Dijkstra

// pseudocode for Dijkstra:
// take 2 params, start and finish.
// make an object of priority queue. called node.
// make 2 vars distances and previous as {}
// Build up initial state: for that,
// make loop of the adjacencyList. and make each of the vertex's distances as Infinity
// except the starting node. for starting node, it will be 0
// with that, enqueue the vertex with the value same as above.
// and set the previous[vertex] as null in this same loop.

// start to loop with a while loop. for looping the node.values of the priority queue
// make a variable smallest globally.
// dequeue the value from the node and assign to smallest.
// if the finish param is equal to this smallest. then we're done. build up path to return at end
// otherwise, check - if the smallest or distances[smallest] not equal to infinity
// then loop the adjacency list of the smallest.
// and find the neighboring node. and assign this to a var called nextNode.
// then calculate new distance to the neighboring node.
// for that, add distances[smallest] with weight of the nextNode. and assign it to a var called candidate
// then make an another var called nextNeighbor. for checking. and assign nextNode.node to this var
// then compare with the candidate. if candidate is less than the distances[nextNeighbor], then
// change the value of distances[nextNeighbor] = candidate. // means, updating new smallest distance of neighbor
// then after that, update the previous object also. previouse[nextNeighbor] assign smallest.
// it means, update the previous - how we got to neighbor(from where we got the neighbor)
// atlast, enqueue in priority queue with new priority. the value will be nextNeighbor and priority is this candidate

// make a path as empty array as globally. for return value.
// for return, go to the start of this while loop. there we setup the "we're done" place.
// there, use an another while loop, and loop the previous[smallest]
// and push the smallest to the path array.then update the smallest
// smallest = previous[smallest]. after this while loop, break the loop.
// after came out from all loops, at the end, return
// the path.concat(smallest).reverse(). because this first smallest value also we needed. and reverse.

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp() {
        let idx = this.values.length - 1;
        let element = this.values[idx];

        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (element.priority >= parent.priority) break;

            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    dequeue() {
        let min = this.values[0];
        let end = this.values.pop();
        if (this.values.length > 0) { // edge case
            this.values[0] = end;
            this.bubbleDown();
        }
        return min;
    }
    bubbleDown() { // [ 6, 2, 3, 4, 5 ]
        let idx = 0;
        let length = this.values.length;
        while (true) {
            let smallest = idx;
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;

            if (leftChildIdx < length && this.values[leftChildIdx].priority < this.values[smallest].priority) {
                smallest = leftChildIdx;
            }

            if (rightChildIdx < length && this.values[rightChildIdx].priority < this.values[smallest].priority) {
                smallest = rightChildIdx;
            }

            if (smallest === idx) break;
            [this.values[smallest], this.values[idx]] = [this.values[idx], this.values[smallest]];
            idx = smallest;
        }
    }
}


class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({ node: vertex2, weight });
        this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }

    Dijkstra(start, finish) {
        let nodes = new PriorityQueue();
        let distance = {}, previous = {};
        let smallest;
        let path = []; // return result array.

        // Building up - initial state.
        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distance[vertex] = 0;
                nodes.enqueue(vertex, 0); // setting up distance initially
            } else {
                distance[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);  // setting up distance initially
            }
            previous[vertex] = null; // setting up the previous(from where the connection comes) as null.
        }
        console.log('qqqqqqqqqqqqqqqqq', nodes)
        console.log('distanccccccccccc', distance)
        console.log('previoussssssssss', previous)

        while (nodes.values.length) { // this is the queue we've created.
            smallest = nodes.dequeue().val; // A (Initially)

            if (smallest === finish) {
                // we're done...... build up path to return at end.

                while (previous[smallest]) {  // for result in order of array.
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }

            if (smallest || distance[smallest] !== Infinity) {
                for (let neighbor in this.adjacencyList[smallest]) { // neighbors of A  (in first iteration - B)
                    let nextNode = this.adjacencyList[smallest][neighbor]; // B
                    // calculate new distance of neighbor node
                    let candidate = distance[smallest] + nextNode.weight;  // 0 + 4   A to B - distance
                    let nextNeighbor = nextNode.node; // A

                    if (candidate < distance[nextNeighbor]) { // Checking B or C is less distance from A.
                        distance[nextNeighbor] = candidate; // updating the new smallest distance of neighbor
                        //  update the previous - how we got to neighbor (from where we got the neighbor)
                        previous[nextNeighbor] = smallest; // assigning the A to the nextNeighbor(B or C).
                        nodes.enqueue(nextNeighbor, candidate); // adding the next neighbor to the priority queue.
                    }
                }
            }
        }
        return path.concat(smallest).reverse();
    }
}

let graph = new WeightedGraph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

// console.log('adj', graph.adjacencyList)

console.log(graph.Dijkstra("A", "E"));
// output -  ["A", "C", "D", "F", "E"]


//               A
//              / \
//             /   \ 4
//            /     \
//         2 /       B
//          /         \
//         /           \ 3
//        /  2      3   \
//       C-----D-------- E
//        \     \       /
//         \     \1    /1
//          \ 4   \   /
//           -----  F
