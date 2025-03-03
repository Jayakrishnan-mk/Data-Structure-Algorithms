class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    printList(list) {
        let arr = [];
        let current = list.head;

        while (current) {
            arr.push({
                val: current.val,
                next: current.next ? current.next.val : null,
                prev: current.prev ? current.prev.val : null
            });
            current = current.next;
        }

        console.log("Head:", list.head ? list.head.val : "null");
        console.log("Tail:", list.tail ? list.tail.val : "null");
        console.log("Length:", list.length);
        console.log("Nodes:", arr);
    }

    push(val) {
        let newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

}

let list = new DoublyLinkedList();
list.push(5);
list.push(15);
list.push(25);
list.push(35);
list.printList(list);
