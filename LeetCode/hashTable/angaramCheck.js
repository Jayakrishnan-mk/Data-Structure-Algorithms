// Anagram Check: Check if two strings are anagrams of each other.

// pseudocode:
// make a fn accepting two strings
// use a hashTable
// make a loop and add first strings letters to table and count also
// if already added,then increase count
// same for 2nd string. but decrease the count this time.
// if not found the letter in hashTable, return false.
// atlast return true

let checkAnagram = (str1, str2) => {
    if (str1.length !== str2.length) return false;

    let hashTable = {};

    for (let i = 0; i < str1.length; i++) {
        hashTable[str1[i]] = (hashTable[str1[i]] || 0) + 1;
    }

    for (let i = 0; i < str2.length; i++) {
        if (hashTable[str2[i]]) hashTable[str2[i]]--;
        else return false;
    }
    return true;

}

console.log(checkAnagram('anagram', 'nagaram'));