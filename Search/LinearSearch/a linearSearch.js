// write a fn that accepts an array and value
// loop through the array and check if the current array element is equal to the value
// if it is, return the index at which the element is found.
// if the value is never found, return -1.

function linearSearch(array, val) {
    for (let i of array) { 
        if(i === val) {
            return array.indexOf(i);
        }
    }
    return -1;
}
console.log(linearSearch([1, 2, 3, 4, 5, 6, 8, 7, 9], 19));
console.log(linearSearch(['kannur', 'wayanad', 'malaporam', 'thrissur', 'palakkad'], 'thrissur'));