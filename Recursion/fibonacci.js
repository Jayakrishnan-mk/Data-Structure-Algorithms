
// fibonacci - recursion

// pseudocode:
// make the recursion fn
// write the base case
// call the fn appropriately and return

// recursion - tabulation technique .....
// function fibonacci(n, fib = [0, 1]) {
//     if (fib.length >= n) return fib;

//     fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
//     return fibonacci(n, fib); // answer in array - fib series
// }
// console.log(fibonacci(10))


// recursion with memoization..... it will return only the total result. not the entire array.
function fibonacci(n, memo = {}) {
    // function fibonacci(n, memo = [undefined, 1, 1]) {
    if (memo[n]) return memo[n];
    if (n <= 1) return n;

    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    let res = memo[n];
    return res;
}

console.log(fibonacci(10));

