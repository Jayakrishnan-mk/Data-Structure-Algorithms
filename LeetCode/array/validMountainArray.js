

// valid mountain array - leetcode - easy

var validMountainArray = function (arr) {
    let n = arr.length;
    if (n < 3) return false;

    let i = 0;

    // walk up
    while (i + 1 < n && arr[i] < arr[i + 1]) {
        i++;
    }

    // peak can't be first or last
    if (i === 0 || i === n - 1) return false;

    // walk down
    while (i + 1 < n && arr[i] > arr[i + 1]) {
        i++;
    }

    return i === n - 1;
};

console.log(validMountainArray([2, 3]));
console.log(validMountainArray([2, 3, 1]));