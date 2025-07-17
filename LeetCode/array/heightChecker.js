

// height checker - leetcode - easy

// Input: heights = [1,1,4,2,1,3]
// Output: 3

// sort this array to a new copied array
// for sorting, use destructure method to take array values. otherwise-
// it will take the original value as modified.
// check the every index by index with both array
// if the indexed item is not eq, count++
// return unmatched count. done


var heightChecker = function (heights) {
    let copied = [...heights].sort((a, b) => a - b);
    let count = 0;
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== copied[i]) {
            count++;
        }
    }
    return count;
};

console.log(heightChecker([1, 1, 4, 2, 1, 3]))
console.log(heightChecker([10, 6, 6, 10, 10, 9, 8, 8, 3, 3, 8, 2, 1, 5, 1, 9, 5, 2, 7, 4, 7, 7]))