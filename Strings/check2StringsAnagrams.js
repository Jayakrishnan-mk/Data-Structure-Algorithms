
// check 2 strings are anagrams or not

// pseudocode:
// make a hashtable
// add the all letters and count of first string to the table
// then loop second string, and decrease the appropriate count of each letter from table
// in that time, if any letter is not there in hashtable, or count is already zero,
// make it return false;
// after the loop, check the all letter's count is zero in table. if it is, return true;

// primary way.....
let checkAnagram = (str1, str2) => {
    if (str1.length !== str2.length) return false // edge case
    let ht = {};
    for (let i = 0; i < str1.length; i++) {
        ht[str1[i]] = (ht[str1[i]] || 0) + 1;
        ht[str2[i]] = (ht[str2[i]] || 0) - 1;
    }

    return Object.values(ht).every(val => val === 0);
}

console.log(checkAnagram('anagram', 'nagaram'))
