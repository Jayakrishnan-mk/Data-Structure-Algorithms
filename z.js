// // Examples:
// isAnagram("listen", "silent")  // true
// isAnagram("hello", "world")    // false
// isAnagram("triangle", "integral") // true
// isAnagram("cat", "car")        // false


// pseudocode:
// first check, both strings length are equal. if not, return false.
// then convert strings to lowercase.
// create a hashmap
// in map, add the string chars and the count of that char from str1.
// then loop the str2. and check, the char is exist in map. if not, return false
// if char exist, then decrease the count of char. if char count is 0 before decrease, then also return false.
// if the loop completes, then check every char count in the map is 0. if not, return false.
// at the end, all conditions passed, return true.

// tc = o(N), sc = o(N)

function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    let hm = new Map();

    for (let char of str1) {
        hm.set(char, (hm.get(char) || 0) + 1);
    }

    for (let char of str2) {
        if (!hm.has(char)) return false;
        if (hm.get(char) < 1) return false;
        hm.set(char, hm.get(char) - 1);
    }

    return true;
}

console.log(isAnagram('hello', 'llohe'));

// console.log(isAnagram("Listen", "Silent")) // true
// console.log(isAnagram("hello", "world"))    // false
// console.log(isAnagram("triangle", "integral")) // true
// console.log(isAnagram("cat", "car"))        // false
