// search insert position - leet code - easy

// pseudocode:
// make 3 vars, start, end values 0,len-1 respectively
// use while loop to check left <= right
// take a mid value as left+right/2
// check if array of mid is target, then return mid
// if mid is greater than target, right will be mid -1
// other wise left will be mid+1
// at the end , return left 


var searchInsert = function (array, target) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (array[mid] === target) {
            return mid;
        } else if (array[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;
};

console.log(searchInsert([1, 3, 5, 6], 4))

