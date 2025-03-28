
// no. of islands - leetcode - medium

// (BFS - Iterative Approach)

// pseudocode:
// first check, the grid length is 0, return 0
// make a queue. and a var island as 0
// make 2 for loops, and take the vars rows and cols to check
// when the grid[r][c] is '1', then islands++
// and call the bfs function. it will be a recursion
// in bfs, make the direction array with each 4 directions.
// and make the grid[r][c] as '0' firstly. mark as visited.
// then first take the r c as params and add it to queue
// then use a while loop with checking, queue.length
// inside the loop, take the dr dc from the direction with looping directions
// then add this r + dr to nr and c + dc to nc
// with that, check these edge cases -
// nc >= 0 && nr >= 0 && nc < cols && nr < rows && grid[nr][nc] === '1'
// if it is, then make this grid[nr][nc] as '0'
// and push to the queue these nr and nc as an array.
// atlast return the islands.

var numIslands = function (grid) {
    if (!grid || grid.length === 0) return 0;
    let queue = [];
    let islands = 0;
    let rows = grid.length, cols = grid[0].length;

    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    function bfs(r, c) {
        grid[r][c] = '0' // marking as visited
        queue = [[r, c]];

        let nr, nc; // new row, new col
        while (queue.length) {
            let [r, c] = queue.shift();
            for (let [dr, dc] of directions) {
                nr = r + dr;
                nc = c + dc;

                if (nr >= 0 && nc >= 0 && nr < rows && nc < cols && grid[nr][nc] === '1') {
                    grid[nr][nc] = '0';
                    queue.push([nr, nc]);
                }
            }
        }
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === '1') {
                islands++;
                bfs(i, j);
            }
        }
    }

    return islands;
}

console.log(numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
]))