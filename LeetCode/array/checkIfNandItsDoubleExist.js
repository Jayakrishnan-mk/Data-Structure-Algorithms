
// Check If N and Its Double Exist - leetcode - easy

// brute force..........
// make a loop i, for iterate arr
// take the value
// make another loop j , for check
// if i eq 2 * j, and i not eq to j, then return true.
// otherwise, after all loops, return false.

var checkIfExist = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i !== j && arr[i] === 2 * arr[j]) {
                // console.log(i, j);
                return true;
            }
        }
    }
    return false;
};

console.log(checkIfExist([0, 0]));