// Question - 1

// input = [0,1,2,3,4,5,0,1,2,3,4,5];
// output:  ["0:2", "1:2", "3:2", ...]

// function getFrequency(array) {
//   let freqObj = {};

//   for(let i = 0; i<array.length; i++) {
//     freqObj[array[i]] = (freqObj[array[i]] || 0) + 1;
//   }

//   let result = [];

//   for(let item in freqObj) {
//     result.push(`${item} : ${freqObj[item]}`);
//   }
//   return result;
// }

// console.log(getFrequency([0,1,2,3,4,5,0,1,2,3,4,5]));
// ===================================================================================
// Question - 2

// let array = [0,1,2,3,4,5,0,1,2,3,4,5];
// print the array elements without using loop

function recursionFn(array, index = 0) {
  if (index >= array.length) return;
  console.log(array[index]);
  recursionFn(array, ++index);
}

recursionFn([0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5]);
