
// graph - undirected

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v) => v !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v) => v !== vertex1);
    }

    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length > 0) {
            let adjacent = this.adjacencyList[vertex].pop();
            this.removeEdge(adjacent, vertex);
        }
        delete this.adjacencyList[vertex];
    }

    dfsTraversalRecursion(start) {
        let result = [];
        let visited = {};
        let adjacencyList = this.adjacencyList;

        (function dfs(vertex) {
            if (!vertex) return; // base case 

            visited[vertex] = true; // add the visited vertex to the object
            result.push(vertex); // after visit, push to result

            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    return dfs(neighbor);
                }
            })
        })(start);

        return result;
    }

    dfsTraversalIterative(start) {
        let stack = [];
        let result = [];
        let visited = {};
        let adjacencyList = this.adjacencyList;

        stack.push(start);
        while (stack.length > 0) {
            let vertex = stack.pop();

            if (!visited[vertex]) {
                visited[vertex] = true;
                result.push(vertex);
                adjacencyList[vertex].forEach(v => {
                    if (!visited[v]) {
                        stack.push(v);
                    }
                })
            }
        }
        return result;
    }
}

let g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');


g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

// console.log('adjacenwoowooooooo', g.adjacencyList)
// console.log('dfssss', g.dfsTraversalRecursion('A'))
console.log('dfssss', g.dfsTraversalIterative('A'))

// console.log('addddd', g.adjacencyList)