
// floodFill - leetcode - easy

// DFS approach - recursion......

// pseudocode:
// first assign this sr and sc of the image to a var like ogClr
// then check, ogClr and color is same, return image spotly.
// and take the vars rows and cols as image.length and image[0].length respectively
// then create the directions array right, down, left, up respectively
// then make the recursion fn as IIFE with passing this sr and sc.
// in recursion fn, take the params as r and c
// then check the conditions, r and c are not less than rows and cols
// and not greater than or equal to 0. and the image[r][c] not equal to ogClr
// then return .
// otherwise, assign, image[r][c] = color
// then make a for of loop to loop the directions array.
// in that, make the dr+r and dc+c to pass the recursion fn itself. 
// call this, with these args. at the end-
// return the image.

let floodFill = function (image, sr, sc, color) {
    let ogClr = image[sr][sc];
    if (ogClr === color) return image;
    let rows = image.length, cols = image[0].length;

    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    (function dfs(r, c) {
        if (r >= rows || c >= cols || r < 0 || c < 0 || image[r][c] !== ogClr) return;
        image[r][c] = color;

        for (let [dr, dc] of directions) {
            dfs(dr + r, dc + c);
        }
    })(sr, sc);
    return image;
}


console.log(floodFill(image = [[1, 1, 1], [1, 1, 0], [1, 0, 1]], sr = 1, sc = 1, color = 2))
// Output: [[2,2,2],[2,2,0],[2,0,1]]