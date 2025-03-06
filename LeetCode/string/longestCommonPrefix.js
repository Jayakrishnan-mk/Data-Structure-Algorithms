// longestCommonPrefix - leet code - easy

// pseudo code:
// make a fn receiving the strings array
// make 2 loops quadratic
// in first loop, take the first string as reference, and use this loop for taking the char of first string
// in the second loop, use one condition
// if the j>=str.length || str[j][i] !== char, then return the str[0] using splice(0,i);
// otherwise nothing to do. after the loop, return str[0].

var longestCommonPrefix = function (strings) {
    if (strings.length === 0) return '';

    for (let i = 0; i < strings[0].length; i++) {
        let char = strings[0][i];

        for (let j = 1; j < strings.length; j++) {
            if (i >= strings[j].length || strings[j][i] !== char) {
                return strings[0].slice(0, i);
            }
        }
    }
    return strings[0]; // all matched condition....
};

console.log(longestCommonPrefix(['flow', 'flower', 'flight']));