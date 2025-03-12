// evaluate reverse polish notation - leet code - medium

// pseudocode:
// use a stack
// and result variable
// use for of to loop the tokens
// if the token is a symbol, check with the symbol. 
// and use the appropriate math for that.
// for using math, take 2 stack.pop() values. first one is b, and second is a.
// and push the result to stack
// if not the symbol, then convert the token to number and push to stack
// at the end, there will be only result in stack. pop out the stack as return value.


//  ["2","1","+","3","*"]
var evalRPN = function (tokens) {
    let stack = [];

    for (token of tokens) {
        if (token === '+' || token === '-' || token === '*' || token === '/') {
            let b = stack.pop();
            let a = stack.pop();
            let result;
            if (token === '+') {
                result = a + b;
            } else if (token === '-') {
                result = a - b;
            } else if (token === '*') {
                result = a * b;
            } else if (token === '/') {
                result = Math.trunc(a / b);
            }
            stack.push(result);
        } else {
            stack.push(Number(token));
        }
    }
    return stack.pop();
}