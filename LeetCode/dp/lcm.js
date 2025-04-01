
// Longest common subsequence - leetcode - medium

// Using tabulation method - for loop

// pseudocode:
// make 2 vars m and n as text1.len and tet2.len respectively
// first make a dp array for text1 and text2
// filling with the length of m+1, and n+1.
// the m+1 will be just fill() and n+1 will be with 0.
// make a for loop and use condition <= m
// and inside an another loop and use condition <= n
// in there, first check is, if the above and left side indexes of text1 and text2 are equal or not
// if it is, then take the diagonal(left top) val of dp and add +1
// otherwise, check the max of left and top and add it to the current index
// after the loop, return the result as dp[m][n]. done

let longestCommonSubsequence = (text1, text2) => {
    let m = text1.length, n = text2.length;
    let dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
            }
            console.log('dddd', dp);
        }
    }

    return dp[m][n];
}

console.log(longestCommonSubsequence(text1 = "abcde", text2 = "ace"))