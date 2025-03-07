// validAnagram - leet code - easy

// pseudocode:
// make a fn accepting two strings
// firstly, check both strings length is same or not - edge case
// use a hashmap to add one strings count
// make a loop to check with the another strings characters
// check with that characters with this hashmap
// if its not there in hashmap, directly return false
// otherwise, decrease the count
// after successfully completed the loop, check the hashmap's size 0 or not
// if 0, return true. otherwise false

// optimized way. TC O(n) & SC O(1)
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;

    // hash map for count of characters
    let count = new Map();

    // Step 1: Build frequency map
    for (let char of s) {
        count.set(char, (count.get(char) || 0) + 1);
    }

    // Step 2: Iterate over `t` and decrement count
    for (let char of t) {
        if (!count.has(char)) return false; // If character not found, return false.
        count.set(char, count.get(char) - 1);

        if (count.get(char) === 0) count.delete(char); // Remove character if count is zero
    }
    return count.size === 0; // If map is empty, it's an anagram.
};

console.log(isAnagram('anagram', 'nagaram'));

// my own way... TC & SC- O(n)
// var isAnagram = function (s, t) {
//     if (s.length !== t.length) return false;
//     let frequencyCounter1 = {};
//     let frequencyCounter2 = {};
//     for (let i of s) {
//         frequencyCounter1[i] = (frequencyCounter1[i] || 0) + 1;
//     }

//     for (let i of t) {
//         frequencyCounter2[i] = (frequencyCounter2[i] || 0) + 1;
//     }

//     for (let i in frequencyCounter1) {
//         if (!(i in frequencyCounter2)) return false;
//         if (frequencyCounter2[i] !== frequencyCounter1[i]) return false;
//     }
//     return true;
// };

// console.log(isAnagram('anagram', 'nagaram'));