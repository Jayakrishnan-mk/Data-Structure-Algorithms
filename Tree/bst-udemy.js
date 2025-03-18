
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

    // tree - bfs - breadth first search approach.

    //         ---> 5
    //            /  \
    //      ---> 3 -> 8
    //          / \    \
    //    ---> 2 -> 4 -> 10

    // result = [5, 3, 8, 2, 4, 10]

    BFSTree() {          //  breadth first search tree
        let queue = [];
        let data = [];

        let node = this.root;
        queue.push(node);

        while (queue.length) {
            node = queue.shift();
            data.push(node.value);
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        return data;
    }

    // Preorder (Root → Left → Right)
    DFSPreOrder() {   // depth first search - pre-order
        let data = [];

        function traverse(node) {
            data.push(node.value);
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
        }
        traverse(this.root);
        return data;
    }

    // Postorder (Left → Right → Root)
    DFSPostOrder() {   // depth first search - post-order
        let data = [];

        function postTraverse(node) {
            if (node.left) postTraverse(node.left)
            if (node.right) postTraverse(node.right)
            data.push(node.value)
        }
        postTraverse(this.root);
        return data;
    }

    // Inorder (Left → Root → Right)
    DFSInOrder() {   // depth first search - in-order
        let data = [];

        function inorderTraverse(node) {
            if (node.left) inorderTraverse(node.left)
            data.push(node.value);
            if (node.right) inorderTraverse(node.right)
        }
        inorderTraverse(this.root);
        return data;
    }
}

let bfsTree = new Bst();
bfsTree.insert(5);
bfsTree.insert(3);
bfsTree.insert(8);
bfsTree.insert(2);
bfsTree.insert(4);
bfsTree.insert(10);
// console.log(find(45))
// console.log("Before Balancing:", bfsTree.BFSTree()); // Unbalanced
// console.log(bfsTree.DFSPreOrder());
// console.log(bfsTree.DFSPostOrder());
console.log(bfsTree.DFSInOrder());
