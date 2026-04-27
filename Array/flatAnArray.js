
// [1, [2, [3, 4]], 5]

function flatArray(arr) {
    return arr.reduce((acc, val) => {
        return acc.concat(Array.isArray(val) ? flatArray(val) : val);
    }, []);
}

console.log(flatArray([1, [2, [3, 4]], 5])); // [ 1, 2, 3, 4, 5 ]