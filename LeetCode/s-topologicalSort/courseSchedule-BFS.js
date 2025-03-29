
// courseSchedule - leetcode - medium

// Approach - Topological Sort using Kahn's Algorithm (BFS approach):.........
// means, checking DAG. (Directed Acyclic Graph)....

// pseudocode:
// make a hashmap called graph. bcs, it will be the adjacency list to represent the graph
// make an inDegree with filling 0. with the numCourses count
// use  a for loop to iterate the prerequisites and add it to the graph.
// with adding that, add the inDegree count also of that specific course.
// after the loop, make a queue.
// after that , make a loop, and take the inDegree[course] equals to 0 values. and add it to the queue.
// because from here , we need to start our queue. 
// then after the loop, make a var processedCount with initial value 0.
// after that, make a while loop with the condition queue.length
// in there , take the value using shift from queue and add it to a var called course.
// and increment the processedCount.
// then, check the condition, if this course has in our graph map, then-
// make a loop for checking the neighbors(dependentCourses) of the course
// and decrease the inDegree of that dependentNeighbors.
// then check, if inDegree of this dependentNeighbor is equal to 0, then push this course to queue.
// atlast, after the loop, return with checking the processedCount is equal to numCourses. 
// it will decide it is, DAG (Directed Acyclic Graph) or not. 

var canFinish = function (numCourses, prerequisites) {
    let graph = new Map(); // it will be the adjacency list to represent the graph.

    let inDegree = new Array(numCourses).fill(0); // Array to store in-degrees

    // Build the graph and in-degree array
    for (let [course, prereq] of prerequisites) {
        if (!graph.has(prereq)) graph.set(prereq, []);
        graph.get(prereq).push(course);
        inDegree[course]++;
    }

    // Queue to store courses with no prerequisites (in-degree 0)
    let queue = [];

    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) queue.push(i);
    }

    let processedCount = 0;

    while (queue.length) {
        let course = queue.shift(); // index of the course.
        processedCount++;

        // Process all the courses dependent on this course
        if (graph.get(course)) {
            for (let dependentCourse of graph.get(course)) {
                inDegree[dependentCourse]--;
                if (inDegree[dependentCourse] === 0) queue.push(dependentCourse);
            }
        }
    }

    // If processed count equals total number of courses, no cycle exists
    return processedCount === numCourses;
};


// console.log(canFinish(numCourses = 2, prerequisites = [[1, 0], [0, 1]]))
console.log(canFinish(numCourses = 2, prerequisites = [[1, 0]]))