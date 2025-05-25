

// create a map.
// loop the s
// add the item and freq to the map
// at the end, loop the map
// check, the first item which has freq only 1, save that to a var
// if didnt get with freq 1 in map, return -1.
// then find the index of that by looping the s again
// and return the index. 

var firstUniqChar = function (s) {
    let ht = {};
    for (let i of s) {
        ht[i] = (ht[i] || 0) + 1;
    }

    for (let i = 0; i < s.length; i++) {
        if (ht[s[i]] === 1) return i;
    }
    return -1;
};



console.log(firstUniqChar("leetcode"))
