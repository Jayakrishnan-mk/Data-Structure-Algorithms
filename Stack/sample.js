
// basic operations in stack with linked list

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // push: ( here push method means, we're doing unshift. bcs, we need constant time complexity )
    push(val) {
        let newNode = new Node(val);

        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }

    // pop: ( here pop method means, we're doing shift method. bcs, we need constant time complexity )
    pop() {
        if (!this.first) return undefined;
        // if (this.size === 1) {
        //     this.first = null;
        //     this.last = null;
        // }
        // same...
        if (this.first === this.last) {
            this.last = null;
        }
        let removedNode = this.first;
        this.first = removedNode.next;

        this.size--;
        return removedNode.val;
    }
}
