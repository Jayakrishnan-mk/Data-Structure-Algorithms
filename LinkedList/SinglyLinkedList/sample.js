class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
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
        return this;
    }

    reverse() {
        if (!this.head) return null;
        // first reverse the head and tail.
        // next, node.next, prev, node
        let prev = null;
        let next;
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        // 5  15  25  null
        for (let i = 0; i < this.length; i++) { 
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}

let list = new SinglyLinkedList();
list.push(5);
list.push(15);
list.push(25);
console.log(JSON.stringify(list, null, 4));
list.reverse();
console.log(JSON.stringify(list, null, 4));