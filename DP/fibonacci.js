// fibonacci

// memoization technique.........
let fibonacci = (n, memo = [undefined, 1, 1]) => {
    if (memo[n]) return memo[n];
    // if (n <= 2) return 1;

    let res = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    console.log(memo)
    memo[n] = res;
    return res;
}


// console.log(fibonacci(10000));

// 0 1 1 2 3 

// tabulation method.........
let fibonacciTabulation = (n) => {
    if (n <= 2) return 1;
    let fib = [0, 1, 1];

    for (let i = 3; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[n];
}
console.log(fibonacciTabulation(10000));

