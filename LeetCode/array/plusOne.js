

// plus one - leetcode - easy

// simple - but wrong way............
// first join all numbers as string 
// then convert to integer
// then add one
// then split every digits
// then return the array



// var plusOne = function (digits) {
//     let str = '';

//     for (let i of digits) {
//         str += i;
//     }
//     // console.log('st', str);
//     str = +str + 1;
//     // console.log('st1', str);

//     str = str.toString().split('');

//     // console.log(str);
//     for (let i = 0; i < str.length; i++) {
//         str[i] = +str[i];
//     }
//     return str;
// };


//  correct way..........
// start adding the numbers from last of the array
// lastDigit += 1
// if lastDigit % 10 is !0, then, return the digits
// after this loop, return [1, ...digits]. this will be the case - [9,9,9]
// answer for this will be [1,0,0,0].

var plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {

        let sum = digits[i] + 1;

        if (sum % 10 !== 0) {
            digits[i] = sum;
            return digits;
        } else {
            digits[i] = 0;
        }
    }
    return [1, ...digits];
};


console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
console.log(plusOne([1, 2, 3]))