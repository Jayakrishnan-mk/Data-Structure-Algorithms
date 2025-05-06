
// Hashmap..................................................................................

// twosum...........
// [2,7,11,15], target = 9

// make a map
// loop the array,
// find the final ie, target - i.
// check , this is in map. if its not, add the i value with the index.
// if it is, then return that map's value and this i.

// let twoSum = (array, target) => {
//     let map = new Map();
//     for (let i = 0; i < array.length; i++) {
//         let final = target - array[i];
//         if (!map.has(final)) {
//             map.set(array[i], i);
//         } else {
//             return [map.get(final), i]
//         }
//     }
// }

// console.log(twoSum([2, 7, 9, 3, 11, 15], 14))


// groupAnagrams...........
//  make a map
// loop the array
// sort the element, and check that is in map or not
// if not, add it with an empty array in map
// pusht this item to that elems array in map
// atlast, we'll get the proper arrays to return in map
// loop the map with foreach, and push the item to result array and return
// or , use Array.from(map.values()) method to return.


var groupAnagrams = function (strs) {
    let map = new Map();

    for (let i of strs) {
        let elem = i.split('').sort().join('');
        if (!map.has(elem)) map.set(elem, []);
        map.get(elem).push(i);
    }
    let result = [];
    map.forEach((item) => {
        result.push(item);
    })
    return result;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))