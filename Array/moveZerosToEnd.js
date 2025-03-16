// Array Manipulation: moving all zeroes to the end of an array - CRED Interview

// make a var nonZeroIndex as 0.
// make a for loop
// if i is not zero, move it to nonZeroth position.
// increment nonZeroIndex
// means move zeros to the end.
// after loop, return array 

let moveZeroes = (array) => {
    let nonZeroIndex = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== 0) {
            [array[i], array[nonZeroIndex]] = [array[nonZeroIndex], array[i]];
            nonZeroIndex++;
        }
    }
    return array;
}

console.log(moveZeroes([1, 2, 0, 0, 33, 58, 0, 500, 0, 4]));
