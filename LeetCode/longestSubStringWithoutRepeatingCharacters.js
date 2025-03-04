// longest SubString Without Repeating Characters - leet code - medium

var lengthOfLongestSubstring = function (string) {
    let map = new Map();
    let length = 0, maxLen = 0;

    for (let i = 0; i < string.length; i++) {
        const char = string[i];

        // If char already in map and within the window, move `length` pointer
        if (map.has(char) && map.get(char) >= length) {
            length = map.get(char) + 1;
        }

        // Store/update latest position of char
        map.set(char, i);

        // Update max length of substring found so far
        maxLen = Math.max(maxLen, i - length + 1);
    }

    return maxLen;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3 ("abc")
console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1 ("b")
console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3 ("wke")
