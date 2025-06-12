

//  Q: How will you find the maximum product of two integers in an unsorted array?

// input = [2,5,1,3,-9,8];

// make a var max
// loop through input,
// inside another loop, j
// check i*j, and add to max with checking max or i*j
// atlast return max.

// brute force.........

// let maxProduct = (array) => {
//     let max = array[0];

//     for (let i = 0; i < array.length; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             max = Math.max(max, array[i] * array[j]);
//         }
//     }
//     return max;
// }

// console.log(maxProduct([2, 5, 1, 3, -9, 8]));


// O(n log n).........
// let maxProduct = (array) => {
//     let n = array.length;
//     array.sort((a, b) => a - b);
//     let left = array[0] * array[1];
//     let right = array[n - 1] * array[n - 2];
//     return Math.max(left, right);
// }

// console.log(maxProduct([-9, 10, 2, 5, 1, 3, -9, 8]));


// O(N)............
let maxProduct = (array) => {

    let max1 = -Infinity, max2 = -Infinity;
    let min1 = Infinity, min2 = Infinity;

    for (let i of array) {
        if (i > max1) {
            [max1, max2] = [i, max1];
        } else if (i > max2) {
            max2 = i;
        }

        if (i < min1) {
            [min1, min2] = [i, min1];
        } else if (i < min2) {
            min2 = i;
        }
    }
    return Math.max(min1 * min2, max1 * max2);
}

console.log(maxProduct([-9, 10, 2, 5, 1, 3, -9, 8]));