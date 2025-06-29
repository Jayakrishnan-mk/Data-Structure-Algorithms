

// fibonacci
// 0, 1, 1, 2, 3, 5, 8, 13, ...


// function fibonacci(n) {
//     if (n === 0) return 0;
//     if (n === 1) return 1;
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

// console.log(fibonacci(5));
// output - 5


function fibonacci(n) {
    let fib = [0];

    if (n === 0) return fib;
    fib.push(1);

    for (let i = 2; i <= n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}

console.log(fibonacci(5));
// Output: [0, 1, 1, 2, 3, 5]
