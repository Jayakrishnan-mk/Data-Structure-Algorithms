// coin change - leetcode - medium

// pseudocode:
// create a new dp array with the size amount+1
// and base case dp[0] is 0.
// make a for loop, to loop the i(i is the dp index)
// inside another for loop to loop the coins
// check, i-c and add it to some var called diff.
// then 1+dp[diff]. add this and assign to some var called currDiff.
// if currDiff is negative and equals infinite. nothing to do. avoid
// otherwise, check the min value with min and currDiff. min will be Infinite initially
// and assign this to min.
// after that loop, assign this min to dp[i]. and make min as Infi. back.
// after all loops, return the dp[amount]; 


var coinChange = function (coins, amount) {
    let dp = Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 1; i <= amount; i++) {
        let min = Infinity;
        for (let c of coins) {
            let diff = dp[i - c];
            if (diff >= 0 && diff !== Infinity) {
                let currDiff = 1 + diff;
                if (min) {
                    min = Math.min(min, currDiff);
                } else {
                    min = currDiff;
                }
            }
        }
        dp[i] = min;
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
};

// console.log(coinChange([2], 3)) // o/p - 1
// console.log(coinChange([1, 2, 5], 11))
// console.log(coinChange([1], 0)) // o/p - 0
console.log(coinChange(coins = [1, 3, 4, 5], amount = 7))