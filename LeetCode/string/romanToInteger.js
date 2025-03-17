// romanToInteger - leet code - easy

// pseudocode:
// make a hm with the roman letters and values.
// make a var result as 0.
// make a loop with the input
// check a condition - the i is < i+1 .
// if yes, then result -= the hm[s[i]].
// if not, then result += hm[s[i]];
// after the loop, return result.

let romanToInt = function (s) {
    // take the hash map values from input.
    let romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let result = 0;
    for (let i = 0; i < s.length; i++) {
        // If current value is less than the next value, subtract it
        if (i + 1 < s.length && romanMap[s[i]] < romanMap[s[i + 1]]) {
            result -= romanMap[s[i]];
        } else {
            result += romanMap[s[i]];
        }
    }
    return result;
}

console.log(romanToInt('MCMXCIV'))