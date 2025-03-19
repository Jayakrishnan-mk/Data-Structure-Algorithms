
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

    // pseudocode:
    // first check, this.root is null, return undefined
    // then make a fn deletenode and call it with this.root and deleteitem
    // and assign this function call to this.root. this fn we'll use for recursion.
    // in deletenode fn also, first check this.root is null or not
    // assign this.root as node or adjust in params. if null, then return node.

    // first we need to find the node which needs to delete
    // for that, first check is node.val > deleteItem. if it is, then node = node.left
    // in else if, opposite, node = node.right
    // in else, we know, else will hit, when the node.val === deleteItem. means we found the node which needs to be deleted.
    // so for deleting, first check , the node.left and right is there or null
    // if both are null, then directly delete(node = null)
    // if right is there, then left will not be. so node= node.right
    // same like left, node = node.left

    // and the third condition. if both childs are there, means left and right are there,
    // first take the left most of the right side as minValue.
    // for that, make an another fn, called findNode or something. assign this fn call to minVal var.
    // in that, pass the node.right. in this fn, use a while, and check the node.left
    // if node.left is there, then node=node.left.
    // after the loop, return node. with this, we got the left most item as minValue
    // now, take this minValue.val and assign this to node.val.
    // what we're doing in this step means, taking the smallest value in the right side, and replacing with the node
    // now, we need to remove that rightside 
    // for that, we're calling this deletenode fn again as recursion with passing this node.right and Minvalue.val
    // and assign this fn call to node.right. with this fn, this node will be successfully removed and node.right will be updated as null.
    // after the loop, return this node.

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
