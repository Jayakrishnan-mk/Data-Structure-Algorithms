
// findTheIndexOfTheFirstOccurrenceInAString - leetcode - easy


// create a loop first to loop haystack. and the condition will be i<n-m
// here the n is haystack len, and m is needle len
// then take the substrings from haystack
// for that, take haystack.substring(i,i+m)
// then check, the substring is eq to needle or not
// if it is, return i directly
// after the loop, return -1.



var strStr = function (haystack, needle) {
    let h = haystack.length;
    let n = needle.length;

    for (let i = 0; i <= h - n; i++) {
        let subStr = haystack.substring(i, i + n);
        if (subStr === needle) return i;
    }
    return -1;
};

console.log(strStr(haystack = "sadbutsad", needle = "sad"))