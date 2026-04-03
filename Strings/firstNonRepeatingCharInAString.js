
// Write a function that finds the first non-repeating character in a string and returns it.
// If all characters repeat, return null.

// // Examples:
// firstNonRepeating("leetcode")   // "l"
// firstNonRepeating("loveleet")   // "o"
// firstNonRepeating("aabb")       // null
// firstNonRepeating("abcabc")     // null
// firstNonRepeating("aabbc")      // "c"

// pseudo

// first, create a hashmap
// add every chars of the string with frequency
// loop through the str again
// check the char's freq in hm.
// if it is 1, return 
// if not, continue the loop.
// at the end of the loop, return null. done.

// tc = o(N), sc = O(N)

function firstNonRepeating(str) {
    let hm = new Map();

    for (let i of str) {
        hm.set(i, (hm.get(i) || 0) + 1);
    }

    for (let i of str) {
        if (hm.get(i) === 1) return i;
    }
    return null;
}

console.log(firstNonRepeating('aabbc')); // c
console.log(firstNonRepeating('loveleet')); // o