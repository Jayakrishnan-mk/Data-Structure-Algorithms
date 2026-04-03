
// Write a function that counts the number of vowels and consonants in a given string and returns both counts.
// Examples:
// countVowelsAndConsonants("hello")
// // { vowels: 2, consonants: 3 }

// countVowelsAndConsonants("javascript")
// // { vowels: 3, consonants: 7 }

// countVowelsAndConsonants("aeiou")
// // { vowels: 5, consonants: 0 }

// countVowelsAndConsonants("hello world")
// // { vowels: 3, consonants: 7 }  — ignore spaces


// pseudo..

// make an enum set for vowels. set=o(1)
// make the string to lowercase.
// make 2 vars, vowel and consonant
// take a regex to remove the special chars and empty spaces
// loop through the string
// check the char is includes in this enum. if it is, increment the vowel var.
// if not, increment the consonant
// after the loop, return vowels and consonants vars. done.

// tc = o(N), sc = o(1)


function countVowelsAndConsonants(str) {
    let vowelSet = new Set(['a', 'e', 'i', 'o', 'u']);
    let vowels = 0, consonants = 0;

    str = str.toLowerCase().replace(/[^a-zA-Z]/g, '');

    for (let i of str) {
        if (vowelSet.has(i)) vowels++;
        else consonants++;
    }
    return { vowels, consonants }
}

console.log(countVowelsAndConsonants('JavA sc  ript!!23'));  // { vowels: 3, consonants: 7 }