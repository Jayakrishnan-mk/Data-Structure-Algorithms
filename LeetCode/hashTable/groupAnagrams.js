// groupAnagrams - leet code - medium

// pseudocode:
// Use a Hash Table (Hash Map) where:
// Key: The sorted version of each word (like "aet" for "eat", "ate", "tea").
// Value: An array storing all words that match the sorted key.
// Iterate through the array:
// Sort each word alphabetically.
// If the sorted word exists in the Hash Table → Push the word to that array.
// If not → Create a new array with that word.
// Finally, return all the values of the Hash Table.

let groupAnagrams = (stringArray) => {
    let hashTable = {};
    let resultArray = [];

    for (let i of stringArray) {
        // sorting the array item to check in hashTable
        let sorted = i.split('').sort().join('');
        if (!hashTable.hasOwnProperty(sorted)) {
            hashTable[sorted] = [];
        }
        // if not in hashTable, push to its anagram group
        hashTable[sorted].push(i);
    }
    // return only values
    return Object.values(hashTable)
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))