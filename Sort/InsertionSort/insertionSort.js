// insertion sort

function insertionSort(array) {
    for (var i = 1; i < array.length; i++) {
        let currentVal = array[i];
        for (var j = i - 1; j >= 0 && array[j] > currentVal; j--) {
            array[j + 1] = array[j];
        }
        array[j + 1] = currentVal;
        // console.log(array)
    }
    return array
}
console.log(insertionSort([3, 1, 8, 2, 5]))
