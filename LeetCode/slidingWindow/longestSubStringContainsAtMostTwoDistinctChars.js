
// longestSubStringContainsAtMostTwoDistinctChars - self

// "Given a string s, return the length of the longest substring that contains at most 2 distinct characters."

// Input: s = "eceba"
// o/p - 3

// pseudocode:
// use a loop for looping the s
// use a left pointer to check the window of distinct char
// make the maxCount var
// in the loop, add the letter to a map with index
// if map has already that letter, and the index of the letter is greater than this left pointer, 
// then move left pointer - i-left + 1.
// after that, add the letter with index to map
// and update the maxCount var
// at the end, return the maxcount 


const distinctSubstring = (s) => {
    let left = 0;
    let maxCount = 0;
    let map = new Map();

    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1);
        } else {
            map.set(s[i], 1);
        }

        // shrink window if more than 2 distinct characters
        while (map.size > 2) {
            // reduce the count of the leftmost char
            let leftChar = s[left];
            map.set(leftChar, map.get(leftChar) - 1);
            if (map.get(leftChar) === 0) {
                map.delete(leftChar);
            }
            left++;
        }


        maxCount = Math.max(maxCount, i - left + 1)
    }
    return maxCount;
}


console.log(distinctSubstring('eceba'));