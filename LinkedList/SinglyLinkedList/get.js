// singly linked list push.

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

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let current = this.head;
        let i = 0;
        while (i !== index) {
            current = current.next;
            i++;
        }
        return current.val;
    }
}


let list = new SinglyLinkedList();
list.push('hey')
list.push('bwoy')
list.push('wassup')
list.push('be')
list.push('ready')
list.push('wuss')
console.log(list)
console.log('11111111', list.get(5))