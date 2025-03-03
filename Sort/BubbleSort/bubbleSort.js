// write a fn for bubble sort

// start looping from i to the end of the array towards the beginning
// start an inner loop with a variable j from the beginning until i-1
// if arr[j] is greater than arr[j+1], swap those 2 values.
// return the sorted array.


// best & efficient way......
// optimized with swap
function bubbleSort(array) {
    for (let i = array.length; i > 0; i--) {
        let swap = false;
        for (let j = 0; j < i - 1; j++) {
            console.log(array, array[j], array[j + 1]);
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                swap = true;
            }
        }
        console.log('one swap done')
        if(!swap) break;
    }
    return array;
}
console.log('result>>>>>>>', bubbleSort([8,1,2,3,4,5,6,7]));

// // normal way.......
// function bubbleSort(array) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j <= array.length - 1; j++) {
//             if (array[j] > array[j + 1]) {
//                 let temp = array[j];
//                 array[j] = array[j + 1];
//                 array[j + 1] = temp;
//             }
//         }
//     }
//     return array;
// }
// console.log(bubbleSort([4, 2, 8, 5, 13, 7]));