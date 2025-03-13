// implementStackUsingArrays.js - Interview question

// push, pop, top(peek), isEmpty, size - all are O(1).
class Stack {
    constructor(size) {
        this.stack = [];
        this.maxSize = size;
    }

    push(val) {
        if (this.stack.length >= this.maxSize) {
            console.log('stack overflow');
            return;
        }
        this.stack.push(val);
        return this;
    }

    pop() {
        if (this.stack.length === 0) return null;
        return this.stack.pop();
    }

    top() {
        if (this.stack.length === 0) return null;
        return this.stack[this.stack.length - 1];
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    size() {
        return this.stack.length;
    }

}

let stack = new Stack(3);
stack.push(45)
stack.push(55)
stack.push(50)
console.log(stack.push(65));
console.log(stack.pop());
console.log(stack.size());