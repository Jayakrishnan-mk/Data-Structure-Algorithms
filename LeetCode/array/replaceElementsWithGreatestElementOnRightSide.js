

// Replace Elements with Greatest Element on Right Side - leetcode - easy

// Brute force......

// pseudocode:
// loop the arr
// if the item is length-1, update the item as -1.
// use a max var
// use another loop j. as i+1
// and update max with checking the max of max and j.
// after this inner loop, update the i th item as max.

// var replaceElements = function (arr) {

//     for (let i = 0; i < arr.length; i++) {

//         // if it's last item, update as -1.
//         if (i === arr.length - 1) {
//             arr[i] = -1;
//             return arr;
//         }
//         let max = 0;

//         for (let j = i + 1; j < arr.length; j++) {
//             max = Math.max(max, arr[j]);
//         }
//         arr[i] = max;
//     }
// };

// console.log(replaceElements([17, 18, 5, 4, 6, 1]))
// [ 18, 6, 6, 6, 1, -1 ]


// optimal solution - O(N) tc & O(1) sc........

// make a var max and intially it's -1
// traverse from backside 
// create a var called current. and add the current item to this.
// then update the item with max
// after that, update max with checking the max of current and max.
// return array after the loop. simple.

var replaceElements = function (arr) {
    let max = -1;

    for (let i = arr.length - 1; i >= 0; i--) {
        let current = arr[i];
        arr[i] = max;
        max = Math.max(max, current);
    }
    return arr;
};

console.log(replaceElements([17, 18, 5, 4, 6, 1]))

