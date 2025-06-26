
// Input: arr = [1,0,2,3,0,4,5,0]
// Output: [1,0,0,2,3,0,0,4]

// loop the array, if 0 comes,add one zero to the right
// then decrease the array length 1
// the loop condition will be the array length
// after the loop, slice the array with this new array length. done


// O(n^2)........
var duplicateZeros = function (arr) {
    let n = arr.length;
    for(let i = 0; i<n; i++) {
        if(arr[i] === 0) {
            arr.splice(i, 0, 0);
            arr.pop();
            i++;
        }
    }
    arr.slice(n);
};
