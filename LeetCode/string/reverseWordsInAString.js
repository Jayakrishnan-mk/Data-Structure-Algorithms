// reverseWordsInAString - leet code - medium

// pseudocode:
// make a fn that accepts the string
// trim the string first to remove unwanted empty spaces
// then split by one or more spaces using regex. bcs, in between words, there are no more than one space.
// reverse the string and join with one empty space
// return the result string

let reverseWords = (string) => {
    return string.trim().split(/\s+/).reverse().join(' ')
}
console.log(reverseWords('   a good          example  '))

// O(n) - TC and SC both.... my own way....
// let reverseWords = (string) => {
//     string = string.trim()

//     let reversedString = '';
//     let stringArray = [];

//     // to make this string as an array with different values for reverse....
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] === ' ') {
//             if (string[i - 1] === ' ') continue;
//             stringArray.push(reversedString);
//             reversedString = '';

//         } else {
//             reversedString += string[i];
//             if (i === string.length - 1) {
//                 stringArray.push(reversedString)
//                 reversedString = '';
//             }
//         }
//     }

//     // to reverse the string elements in the array....
//     let last = stringArray.length - 1;
//     for (let j = 0; j < stringArray.length / 2; j++) {
//         let temp = stringArray[j];
//         stringArray[j] = stringArray[last];
//         stringArray[last] = temp;
//         last--;
//     }

//     // to join the string array....
//     for (let i = 0; i < stringArray.length; i++) {
//         reversedString += stringArray[i]
//         reversedString += ' '
//     }

//     // edge case - trim before sending the result
//     return reversedString.trim();
// }

// console.log(reverseWords('   a good          example  '))