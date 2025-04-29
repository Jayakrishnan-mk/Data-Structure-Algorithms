
// longestRepeatingCharReplacement - leetcode - medium

// pseudocode:
// make the vars left as 0, maxFreq as 0, maxLength as 0
// make a hashtable called freqMap or something
// start a for loop . instead of i , use right. meaningful
// and add the freq of that item to hashtable. if it is there, increment
// then maxFreq, it will be max of maxFreq and the s[right] in the freqMap
// then, check, the window ((right-left+1) - maxFreq) is > k
// bcs, we can modify only k items.
// if it is, then, freqMap of s[left]--
// and left++. to move the left pointer forward
// then, last, maxLength will be, max of maxLength and right-left+1.
// after the loop, return maxLength

var characterReplacement = function (s, k) {
    let left = 0;
    let maxFreq = 0;
    let maxLength = 0;
    let freqMap = {}; // hashtable

    for (let right = 0; right < s.length; right++) {
        freqMap[s[right]] = (freqMap[s[right]] || 0) + 1;

        maxFreq = Math.max(maxFreq, freqMap[s[right]]);

        if ((right - left) + 1 - maxFreq > k) { // more than k changes scenario
            freqMap[s[left]]--;
            left++;
        }

        maxLength = Math.max(maxLength, (right - left) + 1);
    }
    return maxLength;
}

console.log(characterReplacement(s = "ABABA", k = 2)) // 4 - aaaa/bbbb
console.log(characterReplacement(s = "AABABBA", k = 1)) // bbbb - 4