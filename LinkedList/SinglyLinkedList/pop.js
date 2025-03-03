// singly linked list pop.

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
    }

    // for loop way......
    // pop() {
    //     let current = this.head;
    //     if (!current) {
    //         return undefined;
    //     }
    //     else if (this.length === 1) {
    //         this.head = null;
    //         this.tail = null;
    //         this.length--;
    //         return `removed item ${current.val}`;
    //     }

    //     for (let i = 1; i <= this.length; i++) {
    //         let nextCurr = current.next;
    //         if (!nextCurr.next) {
    //             this.tail = current;
    //             this.length--;
    //             current.next = null;
    //             return `popped item is ${nextCurr.val}`;
    //         }
    //         current = current.next;
    //     }
    // }

    // while loop way......
    pop() {
        let current = this.head;
        if (!current) {
            return undefined;
        }
        else if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length--;
            return `removed item ${current.val}`;
        }
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        return current.val;
    }
}

let list = new SinglyLinkedList();
list.push(3);
list.push(36);
list.push(369);
list.push(3693);
console.log(list.pop());
console.log('list', list)
console.log('str', JSON.stringify(list, null, 4))
