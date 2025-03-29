// merge sorted array - leet code - easy 

// pseudocode:
// make a fn accepting 2 arrays and their lengths(positive values, not 0s)
// make variable i,j,k such as i is m-1, j is n-1, k is (m+n)-1 like that.
// start while loop with checking i and j >= 0. means start from backward.
// in condition, which value is greater, keep that in the end of the arr1
// again check the elements are fully looped, with a new while loop(only for arr2)
// if not, push to the remain place in arr1(k).
// at last return arr1 with all values except 0.

var merge = function (arr1, m, arr2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = (m + n) - 1;

    while (i >= 0 && j >= 0) {
        if (arr1[i] < arr2[j]) {
            arr1[k] = arr2[j];
            j--;
        } else {
            arr1[k] = arr1[i];
            i--;
        }
        k--;
    }

    while (j >= 0) {
        arr1[k] = arr2[j];
        j--;
        k--;
    }
    return arr1;
}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))