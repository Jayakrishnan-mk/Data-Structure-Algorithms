
// courseSchedule - leetcode - medium

// Approach - Using dfs algo.........

// pseudocode:
// first make a graph var with making a hashmap
// and loop the prerequisites, and add the course and the prereq to map
// after that, make a state array with numCourses length with filled 0
// then make a recursion fn, and call this with in a for loop
// in that, use condition i < numCourses. and in the loop-
// check, if the course has not been visited- means state[i] === 0,
// call the dfs recursion fn with checking if(!dfs(i)), then return false.
// after the loop, return true.
// in inside the dfs recursion fn, take the params as course.
// and the starting checks of base cases are - 
// if state[course] === 1, return false. 
// if state[course] === 2, return true.
// after these checks, make the state[course] as 1.
// and in an if condition, check this graph has course, then make a for of loop
// to check, the neighbors(prerequisites) of this course.
// and in that condition, call this recursion fn, with checking, if(!dfs(prereq)) return false.
// after that, mark the course as fully processed. means make the state[course] as 2.
// then return true. yes. you're done.🔥

var canFinish = function (numCourses, prerequisites) {
    // Create an adjacency list to represent the graph
    let graph = new Map();

    // Initialize the graph
    for (let [course, prereq] of prerequisites) {
        if (!graph.has(course)) graph.set(course, []);
        graph.get(course).push(prereq);
    }

    // State array to track the status of each course
    // 0 = unvisited, 1 = visiting, 2 = visited
    let state = new Array(numCourses).fill(0);

    // DFS function to check if there's a cycle
    function dfsFn(course) {
        if (state[course] === 1) return false; // it will be cyclic graph
        if (state[course] === 2) return true;

        // Mark the course as being visited
        state[course] = 1;

        // Explore all prerequisites (neighbors)
        if (graph.has(course)) {
            for (let preReq of graph.get(course)) {
                if (!dfsFn(preReq)) return false;  // If cycle detected in any course
            }
        }

        // Mark the course as fully processed
        state[course] = 2;
        return true;
    }

    // Run DFS for every course
    for (let i = 0; i < numCourses; i++) {
        if (state[i] === 0) { // If the course has not been visited
            if (!dfsFn(i)) return false; // If cycle is detected
        }
    }

    return true; // All courses can be completed
};

// console.log(canFinish(numCourses = 2, prerequisites = [[1, 0], [0, 1]]))
console.log(canFinish(numCourses = 2, prerequisites = [[1, 0]]))