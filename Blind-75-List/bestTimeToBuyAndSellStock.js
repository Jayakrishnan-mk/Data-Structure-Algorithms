
// bestTimeToBuyAndSellStock - leetcode - easy

// approach - two pointers

// make 2 pointers left and right
// and one var called profit. initially 0
// use a while loop, right < prices.length
// in the loop, check the condition - prices[left] < prices[right]
// if it is not, then move left pointer
// if it is, then check the max is profit or this right-left. and assign it to profit
// atlast, increment right pointer always +1
// after the loop, return the profit

let maxProfit = (prices) => {
    let left = 0, right = 1, profit = 0;

    while (right < prices.length) {
        if (prices[left] < prices[right]) {
            profit = Math.max(prices[right] - prices[left], profit);
        } else {
            left = right;
        }
        right++;
    }
    return profit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))