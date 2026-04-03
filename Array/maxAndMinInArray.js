// Write a function that finds both the maximum and minimum number in an array 
// without using built-in methods like Math.max, Math.min, or .sort().

// // Examples:
// findMaxMin([3, 1, 7, 2, 9, 4])   // { max: 9, min: 1 }
// findMaxMin([1])                   // { max: 1, min: 1 }
// findMaxMin([-3, -1, -7, -2])     // { max: -1, min: -7 }
// findMaxMin([5, 5, 5])            // { max: 5, min: 5 }

// pseudo:
// first handle edge case of empty array.
// create 2 vars min and max and assign infinity values
// traverse the array
// if item is > than max, update max
// if item is < than min, update min
// after the loop, return max and min

// tc - o(N) , sc - O(1)

function findMaxMin(array) {
    if (!array.length) return null;
    let min = Infinity, max = -Infinity;

    for (let i of array) {
        if (i > max) max = i;
        if (i < min) min = i;
    }
    return { max, min };
}

console.log(findMaxMin([]));