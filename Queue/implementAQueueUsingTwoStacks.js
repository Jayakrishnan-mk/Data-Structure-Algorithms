// implementAQueueUsingTwoStacks - Interview question

class Queue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    // enqueue, dequeue, isEmpty, size, peek(next first item)

    enqueue(val) {
        this.stack1.push(val);
    }

    dequeue() {
        if (this.isEmpty()) return 'Queue is empty!';
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }

        return this.stack2.pop();
    }

    peek() {
        if (this.isEmpty()) return 'Queue is empty!';
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2[this.stack2.length - 1];
    }

    isEmpty() {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }

    size() {
        return this.stack1.length + this.stack2.length;
    }
}

let q = new Queue();
console.log(q.enqueue(10));