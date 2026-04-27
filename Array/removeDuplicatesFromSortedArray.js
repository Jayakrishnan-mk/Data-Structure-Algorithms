
// Write a function that removes duplicates from a SORTED array in place and returns the new length

// Examples:
// removeDuplicates([1, 1, 2, 3, 3, 4])     // 4  → array becomes [1, 2, 3, 4]
// removeDuplicates([1, 1, 1, 1])            // 1  → array becomes [1]
// removeDuplicates([1, 2, 3, 4])            // 4  → array becomes [1, 2, 3, 4]
// removeDuplicates([0, 0, 1, 1, 2, 2, 3])  // 4  → array becomes [0, 1, 2, 3]

// pseudo:
// use loop to traverse
// check the current elem and next elem eq?

function removeDuplicates(array) {
    // using set:
    // const [...unique] = new Set(array);
    // return unique;

    // using reduce:
    return array.reduce((acc, val) => {
        if (!acc.includes(val)) acc.push(val);
        return acc;
    }, []);
}

console.log(removeDuplicates([1, 1, 2, 3, 3, 4]));


