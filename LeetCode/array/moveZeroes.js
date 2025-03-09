// move zeroes - leet code - easy

// pseudo code:
// use quick sort method.
// use the pivot point left for sorting the non 0 values to left side
// make a variable left with value 0
// make a loop
// in the loop, check the i is !== 0. then swap with left and i. and left++
// otherwise nothing to do.
// return array

// quick sort method. using pivot point for shifting 0s.
var moveZeroes = function (array) {
    let left = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== 0) {
            [[array[i], array[left]] = [array[left], array[i]]];
            left++;
        }
    }
    return array;
}

console.log(moveZeroes([0, 1, 0, 10, 8, 0, 3, 12]))


// pseudo code:
// use two pointers method.
// make a var index and the initial val 0
// make a loop. if i is !== 0, then add that value to array[index]. then index++
// after the loop, make an another loop.
// in that, till the index value is array.length - 1, traverse.
// and fill the values with 0.(making the remaining values set to 0)
// return array

// two pointers technique.
// var moveZeroes = function (array) {
//     let index = 0;

//     // Shift all non-zero elements to the front
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] !== 0) {
//             array[index] = array[i];
//             index++;
//         }
//     }

//     // Fill the rest of the array with zeros
//     while (index < array.length) {
//         array[index] = 0;
//         index++;
//     }
//     return array;
// };

// console.log(moveZeroes([0, 1, 0, 10, 8, 0, 3, 12]))

