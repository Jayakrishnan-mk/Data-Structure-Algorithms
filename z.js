


var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;

    let fm1 = new Map(), fm2 = new Map();

    for (let i of s) {
        fm1.set(i, (fm1.get(i) || 0) + 1);
    }

    for (let i of t) {
        fm2.set(i, (fm2.get(i) || 0) + 1);
    }
    console.log('fm', fm1)
    let ha = [...fm1.entries()]
    console.log('ha', ha)
}

console.log(isAnagram(s = "anagram", t = "nagaram"))