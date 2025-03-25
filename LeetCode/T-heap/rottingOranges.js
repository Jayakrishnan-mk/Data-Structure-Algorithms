// rotting oranges - leetcode - medium

// using queue.

// pseudocode:
// take rows and cols values as grid.length and grid[0].length respectively
// take a var minutes as 0 initially.
// use a for loop and an inner for loop,
// one is for looping rows and inside loop is for cols.
// find the total fresh oranges count. (if the value is 1)
// and if any orange is rotten, add that position to a queue. (if value is 2)
// then after the loop, the total fresh oranges count will get.
// check, if the count is 0, then directly return 0 - handle this edge case.

// make the 4 directional array with [0,1], [1,0], [0,-1], [-1, 0] these values
// make a while loop, and check is there any item in queue.
// make a new array as newQueue.
// after this loop, assign newQueue to queue. and if queue.length > 0, then minutes++
// start the next while loop.
// inside that loop, take the direction's values one by one(for of), 
// and check the queue items indices with 4 directions.
// and check what is the status of that position,
// if it is 1, then make the other directions value 2 
// and, push this indices to newQueue.
// then decrease the fresh oranges count.
// for that, check the nr and nc is less than the rows and cols condition 
// means check out of boundaries check with that.
// and nr and nc >= 0 condition also.
// and last, the value of nr,nc of grid is 1. if it is, then make it rotten. assign 2.
// then freshoranges--
// after the all loops, return , if freshoranges is 0, then return minutes, otherwise -1.

//      2  1  0
//      1  1  1
//      1  0  1

// Approach - multi-source BFS (ensuring the shortest path/time calculation)

var orangesRotting = function (grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let minutes = 0;
    let freshOranges = 0;
    let queue = []; // for rotten oranges.

    // Multi-source BFS setup
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) {
                freshOranges++;
            } else if (grid[i][j] === 2) {
                queue.push([i, j]); // adding the indices of the position of rotten oranges
            }
        }
    }

    if (freshOranges === 0) return 0; // edge case handling, there is no fresh oranges to check.

    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    while (queue.length) {        //      2  1  0
        let newQueue = [];        //      1  1  1
        while (queue.length) {    //      1  0  1

            let [r, c] = queue.shift(); // taking the row and column indices from the queue
            // BFS traversal  (level-wise) -------
            for (let [dr, dc] of directions) {  //  [0,1] //   taking the delta row and col
                let nr = r + dr; // new row index
                let nc = c + dc; // new col index
                // [r,c] is already a rotting orange, so near direction are will be rotten next.
                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === 1) {
                    grid[nr][nc] = 2; // Turned rotten
                    freshOranges--;
                    newQueue.push([nr, nc]); //Added to the new queue for the next level.
                }
            }
        }
        queue = newQueue;
        if (queue.length > 0) minutes++;
    }

    return freshOranges === 0 ? minutes : -1;
};

console.log(orangesRotting([[2, 1, 1], [1, 1, 0], [0, 1, 1]]))
