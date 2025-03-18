
// Implement a recursive solution to calculate the sum of an array.

let arraySum = (array, total = 0, i = 0) => {
    if (i >= array.length) return total;
    total = total + array[i];
    return arraySum(array, total, ++i);
}

console.log(arraySum([2, 3, 5, 8]));
