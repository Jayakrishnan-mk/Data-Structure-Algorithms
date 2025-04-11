
// coin change - leetcode - medium

var coinChange = function (coins, amount) {
    let dp = Array(amount + 1).fill(amount + 1);
    dp[0] = 0; // base case - 0 coins needed to make amount 0

    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
            }
        }
    }

    return dp[amount] !== (amount + 1) ? dp[amount] : -1;
};

console.log(coinChange([1, 2, 5], 11)); // 3 

console.log(coinChange([2], 3)); // -1
console.log(coinChange([186, 419, 83, 408], 6249)); // 20
console.log(coinChange([1], 0)); // 0
console.log(coinChange([1, 2, 5], 100)); // 20