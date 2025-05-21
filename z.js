// ⚔️ Next Question: Valid Parentheses
// 🧠 Interviewer Style:

// "Okay, let's say you're given a string containing just '(', ')', '{', '}', '[' and ']'.
// You need to determine if the input string is valid – meaning all brackets are closed in the-
//  correct order.
// How would you approach this?"

// i will create a parantheses map first, to keep the proper closing of the opening brackets
// then i will start to loop this input s
// then, i will check, is the item is open or close
// if it's close, then directly i will return false. bcs, first we need the open bracket in order
// if its open, then i will add this to a map for checking in O(1) time
// then i will iterate the loop, when the close bracket comes up, 
// i will check, which is the proper opening bracket of this in the paranthesis map, then
// i will check, is that already in map or not. if not, then also i will return false spotly.
// if it's in map, then  i will continue.
// this way i will solve this problem with O(N) time and space. we're iterating through the loop-
// only once, that is O(N) for time. and the O(N) space is, we're adding the items to the map
// for O(1) speed fetch. the N is the number iof items in this s input.

let validPara = (s) => {

    let stack = [];

    let bracketMap = {
        ")": "(",
        "]": "[",
        "}": "{"
    }
    for (let i of s) {
        if (i === '{' || i === '[' || i === '(') {
            stack.push(i);
        } else {
            if (stack.pop() !== bracketMap[i]) return false;
        }
    }
    return stack.length === 0;
}

console.log(validPara(s = "()[]{}")) // Output: true