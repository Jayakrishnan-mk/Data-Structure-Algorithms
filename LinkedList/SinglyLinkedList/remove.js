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
        return `pushed - ${newNode.val}`
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }

        let current = this.head;
        let counter = 0;
        while (index !== counter) {
            current = current.next;
            counter++;
        }
        return current;
    }

    pop() {
        // console.log('pop')

        if (this.length === 0) return null;
        if (this.length === 1) {
            let removeNode = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return removeNode.val;
        }
        let current = this.head;
        let newTail;

        while (current.next) { // 2 3 5 9 4
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        return current.val;
    }

    shift() {
        // console.log('shift')

        if (!this.head) return null;
        else {
            let oldHead = this.head;
            this.head = oldHead.next;
            this.length--;
            if (this.length === 0) {
                this.tail = null;
            }
            return oldHead.val;
        }
    }

    remove(index) {
        // console.log('remove only')

        if (index < 0 || index >= this.length) return null;
        if (index === 0) {
            return this.shift();
        } else if (index === this.length - 1) {
            return this.pop();
        } else { // 2 5 8 4 9
            let prevIndex = this.get(index - 1);
            let removeIndex = prevIndex.next;
            prevIndex.next = removeIndex.next;
            this.length--;
            return removeIndex.val;
        }
    }
}

let list = new SinglyLinkedList();
list.push(5);
list.push(15);
list.push(25);
list.push(35);
// console.log('list', list);
// console.log('stringify', JSON.stringify(list, null, 4));
console.log(list.remove(3));
console.log('final - stringify', JSON.stringify(list, null, 4));