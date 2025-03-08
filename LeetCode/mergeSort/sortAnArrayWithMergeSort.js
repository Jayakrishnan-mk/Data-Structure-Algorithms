// sortAnArrayWithMergeSort - leet code - easy

// pseudocode:
// make a fn accepting an array
// make that fn as a recursion
// make an other fn for sorting
// in recursion fn, make it base case as arr.length >= 1, then return.
// and find mid with math.floor
// then handle left and right sides with divide and conquer algo
// then pass it to sort fn
// in sort fn, in parameter will get 2 arrays, compare with that and push the smaller items to new array
// atlast, check anything else missing in the both arrays
// then return result array 

let merge = (arr1, arr2) => {
    let resultArr = [];
    let i = 0, j = 0;

    while (i < arr1.length) {
        if (arr1[i] > arr2[j]) {
            resultArr.push(arr2[j]);
            j++;
        } else {
            resultArr.push(arr1[i]);
            i++;
        }
    }

    while (i < arr1.length) {
        resultArr.push(arr1[i])
        i++;
    }

    while (j < arr2.length) {
        resultArr.push(arr2[j])
        j++;
    }
    return resultArr;

    // return resultArr.concat(arr1.slice(i), arr2.slice(j));

}


var sortArray = function (arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = sortArray(arr.slice(0, mid));
    let right = sortArray(arr.slice(mid));
    return merge(left, right);
};

console.log(sortArray([5, 2, 3, 1, 3]))