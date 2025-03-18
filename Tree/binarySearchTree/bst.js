
// bst operations - insert, delete, search, min&max

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinaryST {
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
        if (current.val === val) return undefined;

        while (true) {
            if (current.val > val) {
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

    search(data) { // i think its find fn
        if (!this.root) return undefined;

        let current = this.root;
        while (current) {
            if (data === current.val) return current;
            if (data < current.val) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return undefined;
    }

    min() {
        if (!this.root) return undefined;
        let node = this.root;
        while (node) {
            if (node.left) {
                node = node.left;
            } else {
                return node.val;
            }
        }
    }

    max() {
        if (!this.root) return undefined;
        let node = this.root;
        while (node) {
            if (node.right) {
                node = node.right;
            } else {
                return node.val;
            }
        }
    }

    delete(data) {
        if (!this.root) return undefined;
        this.root = this._deleteNode(this.root, data);
    }

    _deleteNode(node, deleteItem) {
        // Base case: if the tree is empty
        if (!node) return node;

        if (node.val > deleteItem) {
            node.left = this._deleteNode(node.left, deleteItem)
        } else if (node.val < deleteItem) {
            node.right = this._deleteNode(node.right, deleteItem)
        } else { // delete item found case
            // case 1: node has no children
            if (node.left === null && node.right === null) {
                node = null; // leaf node
            }
            // case 2: node has left children
            else if (!node.right) {
                node = node.left;
            }
            // case 2: node has right children
            else if (!node.left) {
                node = node.right;
            }
            // case 3: node has both side children
            else {
                // find the inorder successor (or predecessor) - left most of the right side.
                let minNode = this._findMin(node.right); // (smallest node in the right subtree)
                node.val = minNode.val;
                node.right = this._deleteNode(node.right, minNode.val);  // Delete the in-order successor
            }
        }
        return node;
    }

    _findMin(node) {
        while (node.left) {
            node = node.left;
        }
        return node;
    }


}

let bsTree = new BinaryST();
bsTree.insert(5);
bsTree.insert(8);
bsTree.insert(3);
bsTree.insert(4);
bsTree.insert(7);
bsTree.insert(1);
// console.log(bsTree.max())
// console.log(bsTree.min())
// console.log(bsTree.search(3))
console.log(bsTree.delete(3))

//          5
//        /  \
//      3     8
//     / \   /
//    1  4  7
// 
