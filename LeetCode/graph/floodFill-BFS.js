// flood fill - leetcode - easy

// pseudocode:
// firstly, take the sc or sr to a var ogColor
// and we've the change color too. so-
// first make a for loop and inner for loop with the image.length as rows and image[0].len as cols
// after that, inside, check, whichever indexes have this sr color. and add that indexes to a queue.
// after that, make a directions array
// then use a while loop, to check the queue.length
// inside that, take the sr and sc from queue.shift.
// and loop the directions array, with adding this nr =  sr + dr and nc = sc + dc.
// after that check, the nc and nr are less than rows and cols and
// greater than or equals 0 checks. and the color is equal to ogColor.
// if it is, then , make the index to new change color. and push this nr and nc to queue as an array.
// atlast, return this image.

var floodFill = function (image, sr, sc, color) {
    let ogColor = image[sr][sc];
    if (ogColor === color) return image; // Avoid infinite loop

    let rows = image.length, cols = image[0].length;
    let queue = [[sr, sc]];
    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    image[sr][sc] = color; // Change the starting pixel

    while (queue.length) {
        let [r, c] = queue.shift();

        for (let [dr, dc] of directions) {
            let nr = dr + r, nc = dc + c;

            if (nr < rows && nc < cols && nr >= 0 && nc >= 0 && image[nr][nc] === ogColor) {
                image[nr][nc] = color;  // Change color
                queue.push([nr, nc]);  // Add to queue for further expansion
            }
        }
    }
    return image;
};

console.log(floodFill(image = [[1, 1, 1], [1, 1, 0], [1, 0, 1]], sr = 1, sc = 1, color = 2))
// Output: [[2,2,2],[2,2,0],[2,0,1]]