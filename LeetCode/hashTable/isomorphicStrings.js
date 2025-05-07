
// isomorphicStrings - leetcode - easy

//  pseudocode:
// first make 2 hashmaps for both strings
// then, make a loop with first string
// and take 2 vars for currChar of s and t 
// like charS = s[i] like that. same for charT also.
// then check, if first map mapST has not this charS, then add it with charS, charT
// same like charTS also
// if it is, then, check the mapST's charS is equals to charT, if its not, return false
// same like mapTS.
// after that, return true. after the loop.

var isIsomorphic = function (s, t) {
    let map1 = new Map();
    let map2 = new Map();

    for (let i = 0; i < s.length; i++) {
        charS = s[i];
        charT = t[i];

        if (map1.has(charS) && map1.get(charS) !== charT) return false;
        if (map2.has(charT) && map2.get(charT) !== charS) return false;

        map1.set(charS, charT);
        map2.set(charT, charS);
    }
    return true;
};