


function frequencyCount(array) {
    return array.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1
        return acc;
    }, {});
}

console.log(frequencyCount([1, 1, 2, 3, 3, 4]));
