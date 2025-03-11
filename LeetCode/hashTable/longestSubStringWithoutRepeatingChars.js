// longestSubStringWithoutRepeatingChars - leet code - medium

// Input: s = "abcabcbb"
// Output: 3

// pseudocode:
// make a hashTable
// and a var called left = 0, and maxLength = 0;
// use this as one pointer. use sliding window technique
// start the for loop with right = 0
// if the i is there in hashTable, and left is less than the count of i in hash, increment left
// if not in hashTable, add with the index
// find maxLength with checking the current window(right-left) +1. 
// after the loop, return maxLength

function lengthOfLongestSubstring(string) {
    let ht = {};
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < string.length; right++) {
        let char = string[right];
        if (ht.hasOwnProperty(char)) {
            // moving left pointer....
            left = Math.max(left, (ht[char] || 0) + 1);
        }
        ht[char] = right;
        maxLength = Math.max(maxLength, (right - left) + 1);
    }
    return maxLength;
}

console.log(lengthOfLongestSubstring('abcabcab'));
