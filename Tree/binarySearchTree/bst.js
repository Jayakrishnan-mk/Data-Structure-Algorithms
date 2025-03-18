
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Bst {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        if (val === current.value) return undefined;
        while (true) {
            if (val < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    find(data) {
        if (!this.root) return false;
        let current = this.root;

        while (current) {
            if (current.value === data) return current;
            current = data < current.value ? current.left : current.right;
        }
        return undefined;
    }
}

let tree = new Bst();
tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(40);
tree.insert(50);
// console.log(find(45))
console.log("Before Balancing:", tree.root); // Unbalanced
