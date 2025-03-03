// consider two arrays, if one arrays values will be squared of another arrays value, then return true,
//   otherwise false. instead of using nested loop, the bigO need to be O(n). decrease the complexity from O(n²) to O(n).

// make 2 arrays.
// make a fn named same.
// first validate with the length of both arrays are equal or not. if not false return.
// instead of using nested loop(in the above code, indexOf is a loop),
// make different objects for compare between 2 arrays.
// loop one array and check the frequency of the item in that array.
// loop another array also with the same.
// and add these array item and the frequency count to that objects.
// now create a 3rd loop for the objects, check the first object's squared item is there in second object or not.
// if not, then false return.
// after that, check the first object's item's frequency with the second object's that item's frequency is equal or not.
// if not , then false return.
// if its equal, then return true. otherwise false.

// continuous code in vs code .............

const ar1 = [1, 2, 3, 4];
const ar2 = [1, 4, 9, 16];
console.log(same(ar1, ar2));

function same(ar1, ar2) {
    if (ar1.length !== ar2.length) return false;

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for(let i of ar1) {
        frequencyCounter1[i] = (frequencyCounter1[i] || 0) + 1;
        // frequencyCounter1[i] = frequencyCounter1[i] in frequencyCounter1 ? frequencyCounter1[i]++ : 1;
    }
    for(let i of ar2) {
        frequencyCounter2[i] = (frequencyCounter2[i] || 0) + 1;
    }
    console.log('freq1', frequencyCounter1)
    console.log('freq2', frequencyCounter2)

    for(let i in frequencyCounter1) {
        if(!(i * i) in frequencyCounter2) return false;
        if(frequencyCounter1[i] !== frequencyCounter2[i*i]) return false;
    }
    return true;
}


