
// sum of two integers - leetcode - medium

// approach - bit manipulation
// (Finding carot --> then carry --> then shift)

// pseudocode:
// make a while loop and check b not equal to 0
// because we're looping till the b will be 0(in bit wise)
// inside, find carry with AND
// then, find the carot a^b and assign to a
// and last, shift the 1 till it reached to first.
// after the loop, return a

var getSum = function (a, b) {
    while (b !== 0) {
        let carry = a & b;
        a = a ^ b;
        b = carry << 1;
    }
    return a;
};

console.log(getSum(5, 3));