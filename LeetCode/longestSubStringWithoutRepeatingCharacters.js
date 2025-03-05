// longest SubString Without Repeating Characters - leet code - medium

// pseudocode:
// make a fn for receiving the string lengthOfLongestSubstring
// create variables for left, maxLength
// create a hashmap named charMap for saving the last indexes of letters
// make a for loop with right = 0
// left is the sliding window. left pointer will change when same character hit
// if charMap includes current char(string[i]), then move left appropriately- 
// with checking math.max is left or charMap(char) + 1
// update charMap with current letter with index
// check maxLength is greater or not. if not, update maxLength
// return maxLength at the end

function lengthOfLongestSubstring(string) {
    let left = 0;
    let maxLength = 0;
    let charMap = new Map();

    for (let right = 0; right < string.length; right++) {
        if (charMap.has(string[right])) {
            left = Math.max(left, charMap.get(string[right]) + 1);
        }

        charMap.set(string[right], right);

        maxLength = Math.max(maxLength, (right - left) + 1);
    }

    return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3 ("abc")
console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1 ("b")
console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3 ("wke")
