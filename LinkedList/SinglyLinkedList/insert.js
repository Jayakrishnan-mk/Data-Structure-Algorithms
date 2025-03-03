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

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
            this.head.next = null;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        // if the index is same as the length, push a new node to the end of the list
        if (index === this.length) {
            //  !!this.push(val) - if we are returning this.push(val), then we will get the full list
            return !!this.push(val);
            // we just need the boolean value. so if its true, then this - !! - will send the true value.
        }
        // if index is 0, unshift a new node to the start of the list.
        else if (index === 0) {
            //  !!this.unshift(val) - if we are returning this.push(val), then we will get the full list
            return !!this.unshift(val);
            // we just need the boolean value. so if its true, then this - !! - will send the true value.
        }
        // using the get method to access the node at the index-1.
        else {
            let foundPrevIndex = this.get(index - 1);
            if (!foundPrevIndex) return false;
            let nextIndex = foundPrevIndex.next;
            let newNode = new Node(val);

            foundPrevIndex.next = newNode;
            newNode.next = nextIndex;
            this.length++;
            return true;
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
console.log(list.insert(3, 'twentyfive'));
console.log('final - stringify', JSON.stringify(list, null, 4));