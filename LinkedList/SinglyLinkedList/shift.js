class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return `pushed - ${newNode.val}`
    }

    shift() {
        if (!this.head) {
            return undefined;
        } else {
            let oldHead = this.head;
            this.head = oldHead.next;
            this.length--;
            if (this.length === 0) {
                this.tail = null;
            }
            return `removed item - ${oldHead.val}`
        }
    }
}

let list = new SLL();
list.push(3);
// list.push(35);
// list.push(357);
console.log('list', list)

console.log(list.shift());

console.log('newlist', list)