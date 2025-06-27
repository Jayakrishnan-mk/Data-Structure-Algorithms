// Z PROBS

// = array : take the greatest element in every array and return in main array.
// [[3,5,6], [3,9,1], [2,0,1,2]] 
// answer will be this ---> [6,9,2]

let presentProblem = (array) => {
    let max = 0;
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let innerArray = array[i];
        for (let j = 0; j < innerArray.length; j++) {
            if (innerArray[j] < innerArray[j + 1]) {
                max = innerArray[j + 1];
            }
        }
        result.push(max);
        max = 0;
    }
    return result;
}
console.log(presentProblem([[3, 5, 6], [3, 9, 1], [2, 0, 1, 2]]))