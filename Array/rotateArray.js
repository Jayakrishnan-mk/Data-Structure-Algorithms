
// Write a function that rotates an array to the right by k positions.

// // Examples:
// rotateArray([1, 2, 3, 4, 5], 2)  // [4, 5, 1, 2, 3]
// rotateArray([1, 2, 3, 4, 5], 1)  // [5, 1, 2, 3, 4]
// rotateArray([1, 2, 3, 4, 5], 5)  // [1, 2, 3, 4, 5]
// rotateArray([1, 2, 3, 4, 5], 7)  // [4, 5, 1, 2, 3]

// Constraints:
// Right rotation — elements shift right, last elements wrap to front
// k can be larger than array length — handle it!
// Try to solve it without creating a new array — O(1) space

// pseudo:
// first edge case handle if array empty.
// take the var position as array.length - k % array length
// then split the array into 2 parts
// left would be 0 to position index
// right would be after position
// at the end, return this in right,left order by spreading.

// tc - o(N), sc - O(N) - in slice, sc would be O(N)

function rotateArray(array, k) {
    if (!array.length) return [];
    let position = array.length - (k % array.length);

    let right = array.slice(position)
    let left = array.slice(0, position);
    return [...right, ...left];
}

console.log(rotateArray([1, 2, 3, 4, 5], 7));
