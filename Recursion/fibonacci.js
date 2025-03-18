
// fibonacci - recursion

// pseudocode:
// make the recursion fn
// write the base case
// call the fn appropriately and return

// recursion.....
function fibonacci(n, fib = [0, 1]) {
    if (fib.length >= n) return fib;

    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    return fibonacci(n, fib); // answer in array - fib series
    // fibonacci(n, fib);
    // return fib[fib.length - 1] + fib[fib.length - 2] // asnwer in final result total, then this code.
}

console.log(fibonacci(10))

// recursion with memoization..... it will return only the total result. not the entire array.
// function fibonacci(n, memo = {}) {
//     if (memo[n]) return memo[n];
//     if (n <= 1) return n;

//     memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
//     return memo;
// }

// console.log(fibonacci(10));

