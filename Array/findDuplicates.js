// Write a function that finds all duplicate elements in an array and returns them."

// Examples:
// findDuplicates([1, 2, 3, 2, 4, 3, 5])  // [2, 3]
// findDuplicates([1, 1, 1, 2, 3])         // [1]
// findDuplicates([1, 2, 3, 4])            // []
// findDuplicates([4, 4, 3, 3, 2, 2])      // [4, 3, 2]

// Constraints:
// Return each duplicate only once — even if it appears 3+ times
// Order of output doesn't matter

// pseudocode:
// create a hashmap
// traverse through array.
// if item exist in hm, increase the count of the item
// if not, add this item to hm and update count as 0.
// create an array for return
// at the end, traverse the hm, and if the count is > 1, 
// add that to an array and return.

// tc - o(N) , sc = O(N)

function findDuplicates(array) {
    let hm = new Map();
    let result = [];
    for (let i of array) {
        hm.set(i, (hm.get(i) || 0) + 1);
    }

    for (let [key, val] of hm) {
        if (val > 1) {
            result.push(key);
        }
    }
    return result;
}

console.log(findDuplicates([1, 2, 3, 2, 4, 3, 5, 3]));