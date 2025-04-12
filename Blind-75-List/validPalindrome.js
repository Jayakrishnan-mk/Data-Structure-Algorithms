
// valid palindrome - leetcode - easy

// make a loop
// take 2 vars left and right
// left is 0 and right is len-1. left will be i.
// loop condition will be less than len/2
// check in every iteration - start and end is equal or not
// if not, return false.
// in the end of the loop, decrease right--.
// after the loop,return true, bcs, every chances are true

let isPalindrome = (str) => {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, "");

    let right = str.length - 1;

    for (let left = 0; left < str.length / 2; left++) {
        if (str[left] !== str[right]) return false;
        right--;
    }
    return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"))

