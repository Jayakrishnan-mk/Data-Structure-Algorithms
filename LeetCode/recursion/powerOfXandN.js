
// power of x,n - leetcode - medium

// pseudocode:
// check first condition, if n === 0 return 1
// if n<0 , then make this 1/recursion fn(x,-n)
// now take the half, with calling the rec fn(x, math.floor(n/2))
// atlast return, if n%2 is 0, means even, then return half*half, otherwise multiply one x also extra.

var myPow = function (x, n) {
    if (n === 0) return 1;
    if (n < 0) return 1 / myPow(x, -n);

    let half = myPow(x, Math.floor(n / 2));

    return (n % 2 === 0) ? half * half : half * half * x;
};

console.log(myPow(2.00000, -2))
console.log(myPow(2.00000, 2))