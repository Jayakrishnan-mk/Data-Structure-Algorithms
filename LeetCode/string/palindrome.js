// valid palindrome - leet code - easy

// make a fn - parameter string
// edge case, if its empty string, return null
// if string length is one, then return true
// remove every non alphanumeric characters from the string- if needed. otherwise it'll not work
// convert the string to lowercase
// make a loop - take the condition as string.length/2
// check with the first and last letter or number is same or not.
// check in that manner.
// if same, continue till last , and return true
// other wise return false.

var isPalindrome = function (string) {
    if (string.length === 0 || string.length === 1) return true;

    string = string.replace(/[^a-zA-Z0-9]/g, '');

    string = string.toLowerCase();
    // Combine replace and toLowerCase in one step - more efficient
    // string = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    let j = string.length - 1;
    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[j]) return false;
        j--;
    }
    return true;
};

console.log(isPalindrome('malay:ala,m'))

