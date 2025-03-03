// selection sort

// make a fn for selection sort
// first create a loop
// then the inner loop
// then check with first value with every other values in the array
// and take the smallest value to first
// same like till the end of the array
// return the sorted array

function selectionSort(array) {
    let min;
    let temp;
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                min = j;
            }
        }
        if (min) {
            temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }
        min = 0;
    }
    return array;
}

console.log(selectionSort([2, 3, 6, 4, 11]));