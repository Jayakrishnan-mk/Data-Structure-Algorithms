// two sum - leet code - easy 

// make a fn, that accepts array and target value
// make a hashmap
// create only one loop
// find the value with every element and push it to the hashmap
// if hashmap has the value, return it. otherwise set the value to map

// o(n2) quadratic....
// var twoSum = function (array, target) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[i] + array[j] === target) return [i, j];
//         }
//     }
// };

// console.log('tt', twoSum([1, 2, 5, 9], 7))

// hash map - O(n)....
var twoSum = function (array, target) {
    let hashMap = new Map();

    for (let i = 0; i < array.length; i++) {
        let value = target - array[i];
        if (hashMap.has(value)) {
            return [hashMap.get(value), i];
        }
        hashMap.set(array[i], i);
    }
};
console.log(twoSum([1, 2, 5, 9], 7))
