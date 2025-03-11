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
        return newNode;
    }

    pop() {
        if (!this.head) return null;
        let poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }

    shift() {
        if (!this.head) return null;
        let shiftedNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = shiftedNode.next;
            shiftedNode.next = null;
            this.head.prev = null;
        }
        this.length--;
        return shiftedNode;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return newNode;
    }

    set(index, val) {
        let getNode = this.get(index);
        if (getNode) {
            getNode.val = val;
            return true;
        } return false;
    }

    printWithArrowMethod() {
        let str = "";
        let node = this.head;
        while (node) {
            str += node.val + " <-> ";
            node = node.next;
        }
        str += "null";
        console.log(str);
    }

    get(index) {
        if (index >= this.length || index < 0) return undefined;
        if (index === 0) return this.head;
        if (index === this.length - 1) return this.tail;
        let mid = Math.floor(this.length / 2);
        if (index <= mid) {
            let i = 0;
            let curr = this.head;
            while (index !== i) {
                i++;
                curr = curr.next;
            }
            return curr;
        } else {
            let curr = this.tail;
            let i = this.length - 1;
            while (i !== index) {
                i--;
                curr = curr.prev;
            }
            return curr;
        }
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) {
            return !!this.unshift(val);
        } else if (index === this.length) {
            return !!this.push(val);
        } else {
            let prevItem = this.get(index - 1);
            let nextItem = prevItem.next;

            let newNode = new Node(val);
            prevItem.next = newNode;
            newNode.prev = prevItem;
            newNode.next = nextItem;
            nextItem.prev = newNode;

            this.length++;
            return true;
        }
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        let removeNode;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        removeNode = this.get(index);
        let nextNode = removeNode.next;
        let prevNode = removeNode.prev;

        prevNode.next = nextNode;
        nextNode.prev = prevNode;

        removeNode.next = null;
        removeNode.prev = null;

        this.length--;
        return removeNode;
    }

}

let newList = new DoublyLinkedList();
newList.push(5);
newList.push(15);
newList.push(25);
newList.push(35);
newList.push(45);
// console.log(newList.get(3));
console.log(newList.remove(4));
// newList.printList(newList);
newList.printWithArrowMethod();