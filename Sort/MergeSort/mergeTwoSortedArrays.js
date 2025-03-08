// merge sort in sorted arrays.

// pseudocode:
// make a fn accepting two merged arrays...
// make a while loop. the condition must be the i<ar1.length && j<ar2.length
// check with the i and j or specific strings. and which is smaller, push that to new result array
// at last, whichever array has remaining values, push it directly to result array
// return result

function merge(ar1, ar2) {
    let resultArray = [];
    let i = 0, j = 0;

    while (i < ar1.length && j < ar2.length) {
        if (ar1[i] <= ar2[j]) {
            resultArray.push(ar1[i]);
            i++;
        } else {
            resultArray.push(ar2[j]);
            j++;
        }
    }

    while (i < ar1.length) {
        resultArray.push(ar1[i]);
        i++;
    }

    while (j < ar2.length) {
        resultArray.push(ar2[j]);
        j++;
    }

    return resultArray;
}

console.log(merge([1, 5, 9], [2, 10, 99, 100]));