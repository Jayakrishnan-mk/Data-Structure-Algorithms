// two sum - leet code - easy

// pseudocode:
// make a hash table
// make a loop. and find a value with target - i
// if value is not there in hashmap, set with the index
// otherwise, check the value in hashmap, and return the index of that and i

// using hasTable....
var twoSum = function (array, target) {
    let hashTable = {};

    for (let i = 0; i < array.length; i++) {
        let value = target - array[i];
        if (hashTable.hasOwnProperty(value)) {
            return [hashTable[value], i];
        }
        hashTable[array[i]] = i;
    }
}

console.log(twoSum([1, 2, 3, 4, 5, 6], 11));


// using hashmap....
// let twoSum = (array, target) => {
//     let hashMap = new Map();

//     for (let i = 0; i < array.length; i++) {
//         let value = target - array[i];
//         if (hashMap.has(value)) {
//             return [hashMap.get(value), i];
//         }
//         hashMap.set(array[i], i);
//     }
// }

// console.log(twoSum([1, 2, 3, 4, 5, 6], 11));
