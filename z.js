




// let validMountainArray = function (arr) {
//     if (arr.length < 3) return false;

//     let length = arr.length;
//     let i = 0;

//     // walk up
//     while (arr[i] < arr[i + 1] && i + 1 < length) {
//         i++;
//     }

//     // peak can't be first or last
//     if (i === 0 || i === length - 1) return false;

//     // walk down
//     while (arr[i] > arr[i + 1] && i + 1 < length) {
//         i++;
//     }
//     return i === length - 1;
// }


// console.log(validMountainArray([2, 3, 10, 1]));

