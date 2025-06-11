



//  Strings – Valid Anagram



let validAnagrams = (str1, str2) => {
    let freqMap = new Map;

    for (let i = 0; i < str1.length; i++) {
        if (freqMap.has(str1[i])) {
            freqMap.set(str1[i], freqMap.get(str1[i]) + 1);
        } else {
            freqMap.set(str1[i], 1);
        }
    }

    for (let i of str2) {
        if (!freqMap.has(i)) return false;
        freqMap.set(i, freqMap.get(i) - 1);
        if (freqMap.get(i) === 0) {
            freqMap.delete(i);
        }
    }
    return freqMap.size === 0;
};

console.log(validAnagrams(s = "listen", t = "silent"))
console.log(validAnagrams(s = "rat", t = "car"))

// Input: s = "listen", t = "silent"
// Output: true

// Input: s = "rat", t = "car"
// Output: false
