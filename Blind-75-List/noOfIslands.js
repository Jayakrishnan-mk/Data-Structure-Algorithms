
// number of islands - leetcode - medium

// Using BFS

// pseudocode:
// make vars raws and cols as grid.length and grid[0].length respectively
// and make a queue as empty array
// and a var called islandCount as 0
// and a directions array as [[0, 1], [1, 0], [0, -1], [-1, 0]] // right,down,left,up
// make a for loop and an innerloop for looping the rows and cols accordingly
// inside,check, if the grid[r][c] === "1", 
// then, increment islandCount++
// and, add this [r,c] to queue.
// and start a while loop after this condition
// like queue.length
// inside, take the r and c with shifting the array from queue
// and loop the directions array.values will be dr and dc
// make the r and c as r+dr and c+dc
// then check the conditions like:
// r and c are >= 0 and <rows and <cols and grid[r][c] === "1"
// then mark this as visited. means, make this "0"
// then add this r,c to queue
// after every loops, return islandCount 

var numIslands = function (grid) {
    let rows = grid.length, cols = grid[0].length;
    let queue = [], islandCount = 0;
    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === "1") {
                islandCount++;
                queue.push([i, j]);

                while (queue.length) {
                    let [r, c] = queue.shift();
                    for (let [dr, dc] of directions) {
                        nr = r + dr, nc = c + dc;

                        if (nr >= 0 && nc >= 0 && nr < rows && nc < cols && grid[nr][nc] === "1") {
                            queue.push([nr, nc]);
                            grid[nr][nc] = "0" // marking as visited.
                        }
                    }
                }
            }
        }
    }
    return islandCount;
}

console.log(numIslands(grid = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
])) // o/p = 1