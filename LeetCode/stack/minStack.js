
// min stack
// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

class Stack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val) {
        this.stack.push(val);

        let min = this.minStack.length === 0 ? val : Math.min(val, this.minStack[this.minStack.length - 1]);
        this.minStack.push(min);
    }

    pop() {
        this.stack.pop();
        this.minStack.pop();
    }

    top() {
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}

let s = new Stack();
s.push(4);
s.push(2);
s.push(6);
s.push(1);

console.log(s.getMin()); // 1
s.pop(); // remove 1
console.log(s.getMin()); // 2
console.log(s.top());    // 6
