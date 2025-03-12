// valid Parentheses - leet code - easy

// pseudocode:
// make a hash table with the values as chances of the parentheses in vice versa
// make a stack as empty array
// use for loop with s.length
// check in the map has that char 
// if not, add to stack
// if yes, check, stack.pop !== map[char] , then return false;
// at the end of the loop, check the stack.length equals 0
// return that condition as boolean

var isValid = function (s) {
    let map = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    let stack = [];

    // s - ( [ { } ] )
    for (let char of s) {
        if (!map[char]) {
            stack.push(char); // Push open brackets
        } else {
            if (stack.pop() !== map[char]) return false; // Check closing bracket match
        }
    }
    return stack.length === 0; // Stack should be empty if valid
}
console.log(isValid('()[]{}'))
