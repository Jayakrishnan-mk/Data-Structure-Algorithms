
// climbing stairs - leetcode - easy

var climbStairs = function (n) {
    let prev1 = 1, prev2 = 1;
    for (let i = 2; i <= n; i++) {
        temp = prev1 + prev2;
        prev1 = prev2;
        prev2 = temp;
    }
    return prev2;
}

console.log(climbStairs(5))