
// climbing stairs - leetcode - easy

// Tabulation method.......

// pseudocode:
// make the base case, if n<=2 return n.
// then make a dp array with the size of n+1.
// then assign the dp[1] and dp[2] as 1 and 2 respectively
// bcs, here we can walk only 1 or 2 stairs at a time.
// after that, make a for loop. i start from 3.
// and add the i-1 and i-2 sum to the dp[i];
// atlast , after the loop, return the dp[n];

// Method 1: DP Array (O(n) Space)
// var climbStairs = function (n) {
//     if (n <= 2) return n;

//     let dp = new Array(n + 1);
//     dp[1] = 1;
//     dp[2] = 2;

//     for (let i = 3; i <= n; i++) {
//         dp[i] = dp[i - 1] + dp[i - 2];
//     }

//     return dp[n];
// };

// console.log(climbStairs(3))

// Method 2: Space Optimized (O(1) Space)
var climbStairs = function (n) {
    if (n <= 2) return n;

    let prev1 = 1;
    let prev2 = 2;
    let curr;
    for (let i = 3; i <= n; i++) {
        curr = prev1 + prev2;
        prev1 = prev2;
        prev2 = curr;
    }

    return prev2;
};

console.log(climbStairs(3))
