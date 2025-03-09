// binary search - O(log n)

// pseudocode:
// use 3 vars start, end and mid. values 0, array.length - 1, array.length/2 respectively
// use the while loop and condition is array[mid] not equal to target
// and one more condition, start <= end. because otherwise it will be infinite loop
// then check the mid value of array with target.
// if less, end pointer comes to mid - 1. otherwise start pointer goes to mid + 1.
// after that, mid value will be left+right / 2
// after the loop, check the array[mid] is target or not. 
// if target, then return mid. otherwise -1

function binary(arr, n) {
    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor(arr.length / 2);

    while (arr[mid] !== n && start <= end) {
        if (arr[mid] < n) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
        mid = Math.floor((start + end) / 2);
    }
    if (arr[mid] === n) return mid;
    return -1;
}
console.log(binary([1, 2, 3, 4, 5, 6], 1))