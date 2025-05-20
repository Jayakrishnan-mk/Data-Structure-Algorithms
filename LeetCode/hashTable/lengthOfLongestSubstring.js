
// lengthOfLongestSubstring - leetcode - medium


// create a map for adding the index's of the letters
// use a start var 0
// loop the s, and check, if the map has i, and the indx of i in map is greater than or eq to start, then move the start pointer
// and update the map index, outside the condition.
// and create the windowlength, according to the i-start+1.
// then find the max with checking the max and windowlength
// return max;


var lengthOfLongestSubstring = function (s) {
    let max = 0;
    let map = new Map();

    let start = 0;

    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i]) && map.get(s[i]) >= start) {
            start = map.get(s[i]) + 1;
        }
        map.set(s[i], i);
        let window = i - start + 1;
        max = Math.max(max, window);
    }
    return max;
}

console.log(lengthOfLongestSubstring('aabcdabc'))