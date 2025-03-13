// rotting oranges - leet code - medium

// no oranges cell - 0
// fresh Oranges  - 1
// rotten oranges - 2

// pseudocode:

// part - 1
// create vars rows as grid.len, cols as grid[0].len, minute as 0, freshCount 0 and queue as []
// make a loop, and use this for rows traverse
// make an inner loop, and use this for cols traverse
// make a count of fresh oranges with a check
// if the grid of i and j is equals 1.
// if one, then take count as freshCount
// if rotten oranges are there (check with value 2), then add to queue as an array
// after the loop, check freshCount === 0 or not
// if 0, then return 0;
//

// part - 2
// make a direction array and values are right,down,left,up respectively
// start a while loop with check the queue.length > 0
// make a var newQueue as []
// inside another while use. same check(queue.length > 0)
// if not, then queue = newQueue and -
// if queue.length > 0, minute++.
// now, if its entered to this while loop, 
// next, queue.shift() to r,c
// then start a for loop with [dr,dc].loop the directions
// take 2 var nr and nc as r + dr and c + dc respectively
// and check if nr>=0 && nr<rows && nc>=0 && nc<cols && grid[nr,nc] === 1
// if it is, then grid[nr,nc] = 2 makes rotten
// decrease the freshCount--
// add it to newQueue- push [nr,nc] as an array
// after the last while loop, return freshCount === 0 ? minutes: -1.
// done. You're great. 😎


var orangesRotting = function (grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let minutes = 0;
    let freshCount = 0;
    let queue = [];

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) {
                freshCount++;  // Count fresh oranges
            } else if (grid[i][j] === 2) {
                queue.push([i, j]);  // Store all rotten oranges
            }
        }
    }

    // If no fresh oranges, return 0 immediately
    if (freshCount === 0) return 0;

    // Step 2: Perform BFS (multi-source) -  (Breadth-First Search)
    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // right,down,left,up respectively

    while (queue.length > 0) {
        let newQueue = [];
        while (queue.length > 0) {
            let [r, c] = queue.shift(); // row and column as r,c
            for (let [dr, dc] of directions) {   // delta row and delta col
                let nr = r + dr;
                let nc = c + dc;
                // checks less than rows and cols and it's fresh orange
                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === 1) {
                    grid[nr][nc] = 2 // making fresh orange as rotten. spreading...
                    freshCount--; // Decrease fresh count
                    newQueue.push([nr, nc]); // Add to next level queue
                }
            }
        }
        queue = newQueue;
        if (queue.length > 0) minutes++;  // Only count minutes if spread happened
    }
    console.log('minutes', minutes)
    return freshCount === 0 ? minutes : -1; // If fresh oranges remain, return -1
}

// console.log(orangesRotting([[2, 1, 1], [1, 1, 0], [0, 1, 1]]))
console.log(orangesRotting([[2, 1, 1], [0, 1, 1], [1, 0, 1]]))
