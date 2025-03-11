//  first unique character in a string - leet code - easy

// pseudocode:
// make a hashTable
// make a loop and add the letters and count to the table
// make an anoher loop. check in order from start which letter has count 1.
// return the index of the letter

let firstUniqChar = (string) => {
    let hashTable = {};

    // use for of loop for adding the letter and count to hashTable
    for (let i of string) {
        hashTable[i] = (hashTable[i] || 0) + 1;
    }

    // use normal for loop for getting index...
    for (let i = 0; i < string.length; i++) {
        if (hashTable[string[i]] === 1) return i;
    }
    return -1;
}

console.log(firstUniqChar('wowbabs'));