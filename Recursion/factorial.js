function findFactorial(num) {
    if (num === 0 || num === 1) return 1;
    if (num > 0) {
        return num * findFactorial(num - 1);
    }
}

console.log(findFactorial(5));

// 5*4
// 4* 3
// 3*2
// 2*1
// 1