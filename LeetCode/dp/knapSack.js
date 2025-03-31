
// 0/1 knap sack - geeks for geeks - medium

// Input:  W = 4, profit[] = [1, 2, 3], weight[] = [4, 5, 1]
// Output: 3

// Explanation: There are two items which have weight less than or equal to 4.
// If we select the item with weight 4, the possible profit is 1.
// And if we select the item with weight 1, the possible profit is 3.
// So the maximum possible profit is 3.
// Note that we cannot put both the items with weight 4 and 1 together as the capacity of the bag is 4.


function knapsackOptimized(W, weight, profit, n) {
    let dp = Array(W + 1).fill(0);

    for (let i = 0; i < n; i++) {
        for (let w = W; w >= weight[i]; w--) {
            dp[w] = Math.max(dp[w], profit[i] + dp[w - weight[i]]);
        }
    }

    return dp[W];
}


console.log(knapsack(W = 4, profit = [1, 2, 3], weight = [4, 5, 1], profit.length))
// output will be 3 


// function knapsack(W, weight, profit, n) {
//     let dp = Array(n + 1)
//         .fill(0)
//         .map(() => Array(W + 1).fill(0));

//     console.log('dpppp', dp);
//     // profit =  [1, 2, 3]

//     for (let i = 1; i <= n; i++) {
//         for (let w = 0; w <= W; w++) {
//             if (weight[i - 1] <= w) {   // [4, 5, 1]
//                 dp[i][w] = Math.max(dp[i - 1][w], profit[i - 1] + dp[i - 1][w - weight[i - 1]]);
//             } else {             //                                                                        
//                 dp[i][w] = dp[i - 1][w];
//             }
//         }
//     }

//     return dp[n][W];
// }