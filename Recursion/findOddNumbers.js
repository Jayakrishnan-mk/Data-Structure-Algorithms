function findOddNumber(arr) {

    let oddArray = [];

    if (arr.length === 0) return oddArray;
    if (arr[0] % 2 !== 0) oddArray.push(arr[0]);

    oddArray = oddArray.concat(findOddNumber(arr.slice(1)));
    return oddArray;
}

console.log(findOddNumber([1, 2, 3, 4, 5, 6, 7]));