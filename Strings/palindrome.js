
// // Examples:
// isPalindrome("racecar") // true
// isPalindrome("hello")   // false
// isPalindrome("madam")   // true
// isPalindrome("abcba")   // true

// first convert the input string to lowercase
// then create a last variable from the end of string
// then check the last and first elements are same
// if not, return false.
// increment first and decrement last accordingly
// only traverse till half of the string length
// at the end, return true

// tc = o(N), sc = o(1)

function isPalindrome(str) {
    str = str.toLowerCase();
    let last = str.length - 1;
    for (let first = 0; first < str.length / 2; first++) {
        if (str[first] !== str[last]) return false;
        last--;
    }
    return true;
}


console.log(isPalindrome(""))      // true — empty string is palindrome
console.log(isPalindrome("a"))     // true — single char is palindrome
console.log(isPalindrome("Racecar")) // true — lowercase handles this 