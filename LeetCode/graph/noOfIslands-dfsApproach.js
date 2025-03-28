
// no. of islands - leetcode - medium

// (DFS - Recursive Approach)

// pseudocode:
// first check the condition edge case
// the grid length is 0, then return 0.
// make a var islands.
// second, find the rows and cols as grid.len and grid[0].len respectively
// then use 2 for loops, one is for rows and one is for cols
// check, the value of grid[i][j] is '1' or not, if 1, then islands++
// then, call the dfs fn, and pass this i and j. it will be a recursion fn
// take the i and j as r and c in params. 
// in there,first check all the edge cases . i.e-
// r or c are > 0 or less than rows or cols or the value of grid[r][c] is not 0 
// if it is, then return null spotly.
// otherwise, 
// make this grid[r][c] as '0'. and
// make this fn recursively with passing this r and c as 4 directions-
// r-1,c
// r+1,c
// r,c-1
// r,c+1
// after the end of the main fn, return the islands.

var numIslands = function (grid) {
    if (!grid.length) return 0;

    let islands = 0;
    let rows = grid.length;
    let cols = grid[0].length;

    function dfs(r, c) {
        // Base conditions: out of bounds or water
        if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === '0') return null;

        // Mark as visited
        grid[r][c] = '0';

        // Explore all 4 directions
        dfs(r + 1, c)
        dfs(r - 1, c)
        dfs(r, c + 1)
        dfs(r, c - 1)
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === '1') {
                islands++;
                dfs(i, j); // Sink the entire island
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