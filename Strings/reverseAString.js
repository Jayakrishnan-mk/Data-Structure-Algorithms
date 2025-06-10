


// Input:  [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]

let moveZeroes = (array) => {
    let pointer = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== 0) {
            array[pointer] = array[i];
            array[i] = 0;
            pointer++;
        }
    }
    return array;
}

console.log(moveZeroes([0, 1, 0, 3, 12]))