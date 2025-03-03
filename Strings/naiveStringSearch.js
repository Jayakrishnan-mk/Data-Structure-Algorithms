const longerString = 'ohooho wowoho oh wow oho woo nice';
const shorterString = 'oho';

// naive string search
// loop over the longerString
// loop over the shorterString
// if the characters dont match, break out of the inner loop
// if the characters do match, keep going
// if you complete the inner loop and find a match, increment the count of matches
// return the count

function naiveSearch(longString, shortString) {
    let count = 0;
    for (let i = 0; i < longString.length; i++) {
        for (let j = 0; j < shortString.length; j++) {
            if (shortString[j] !== longString[i + j]) {
                break;
            } else {
                if (j === shortString.length - 1) {
                    count++;
                }
            }
        }
    }
    return count;
}

console.log(naiveSearch(longerString, shorterString));