// Practice recursive and iterative traversal 
// (Stack-based for DFS, Queue-based for BFS).

class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let node = new Node(val);

        if (!this.root) {
            this.root = node;
            return this;
        }
        let current = this.root;
        if (val === current.value) return undefined;

        while (true) {
            if (current.value > val) {
                if (!current.left) {
                    current.left = node;
                    return this;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = node;
                    return this;
                }
                current = current.right;
            }
        }
    }

    find(val) {
        if (!this.root) return undefined;
        let current = this.root;

        while (current) {
            if (current.value === val) {
                return current;
            }
            if (current.value > val) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return undefined;
    }
    // ==================================   BFS  ==================================
    bfsTraversal() {
        let queue = [];
        let data = [];

        let node = this.root;
        if (!node) return [];
        queue.push(node);

        // using queue....
        // while (queue.length) {
        //     node = queue.shift();
        //     data.push(node.value);

        //     if (node.left) queue.push(node.left);
        //     if (node.right) queue.push(node.right);
        // }
        // return data;

        // using recursion....
        function traverse(queue) {
            if (!queue.length) return data;
            let node = queue.shift();
            data.push(node.value);

            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
            traverse(queue);
        }
        traverse(queue);
        return data;
    }

    //         ---> 5
    //            /  \
    //      ---> 3 -> 8
    //          / \    \
    //    ---> 2 -> 4 -> 10

    // ==================================   DFS  ======================================
    // RECURSIVE SIDE.......
    dfsInOrderRecursive() {
        // inorder // 2,3,4,5,8,10  (left-root-right) - like ascending.
        let data = [];

        function traverse(node) {
            if (node.left) traverse(node.left);
            data.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

    dfsPreOrderRecursive() {
        // preorder // 5,3,2,4,8,10  (root-left-right) - like start desc end asc.
        let data = [];

        function traverse(node) {
            data.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

    dfsPostOrderRecursive() {
        // postorder // 2,4,3,10,8,5  (left-right-root) - like ascending.
        let data = [];

        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }

    // USING STACK WAY SIDE.......
    dfsInOrderIterative() { // inorder // 2,3,4,5,8,10 
        let stack = [];
        let data = [];
        let current = this.root;

        if (!current) return [];
        while (stack.length || current) {
            while (current) {    // Go as left as possible
                stack.push(current);
                current = current.left;
            }
            current = stack.pop();
            data.push(current.value);
            current = current.right;
        }
        return data;
    }

    dfsPreOrderIterative() {  // preorder // 5,3,2,4,8,10 
        let stack = [this.root], data = [];
        if (!this.root) return [];

        while (stack.length) {
            let node = stack.pop();
            data.push(node.value);

            // Push right first. so left is processed first
            if (node.right) stack.push(node.right);
            if (node.left) stack.push(node.left);
            // Why Push Right First?
            // Since stacks are LIFO, we push the right child first so the left child gets processed first.
        }
        return data;
    }

    dfsPostOrderIterative() {  // postorder // 2,4,3,10,8,5  
        let stack1 = [this.root], stack2 = [], data = [];
        // Why Two Stacks?
        // First stack (stack1) gets nodes in root-right-left order.
        // Second stack (stack2) reverses it to left-right-root (postorder).
        if (!this.root) return [];

        while (stack1.length) {
            let node = stack1.pop();
            stack2.push(node);

            if (node.left) stack1.push(node.left);
            if (node.right) stack1.push(node.right);
        }

        while (stack2.length) {
            data.push(stack2.pop().value);
        }
        return data;
    }

    // MORRIS IN-ORDER TRAVERSAL

    // pseudocode:
    // make vars data as [], node as this.root.
    // make a while loop, with the condition - node not null
    // first check - if node.left is null, directly push to result array and 
    // assign node = node.right.
    // else - first thing, find the predecessor. 
    // the predecessor will be the node.left. 
    // then use a separate while loop, for finding the rightmost node
    // if predecessor.right and predecessor !== node, then predecessor = predecessor.right.
    // now we got the rightmost node, before going to the left side, make the thread link with the root node.
    // for that, check , if the predecessor.right is null, then make it predecessor.right as node.
    // and move the current node to node.left
    // else - we need to remove the thread , if already there is a thread. for that-
    // predecessor.next = null. then push the node value to data. then make node = node.right
    // after the loop, return the data. we're done.

    morrisInorderTraversal() {
        let data = [], node = this.root;

        while (node) {
            if (!node.left) {
                data.push(node.value); // Visit the node
                node = node.right; // Move to the right subtree
            } else {      // Find the rightmost node of the left subtree
                let predecessor = node.left;

                while (predecessor.right && predecessor.right !== node) {
                    predecessor = predecessor.right; // finding right-most node.
                }

                if (!predecessor.right) {
                    predecessor.right = node; // creating a thread link.
                    node = node.left; // Move to the left subtree
                } else {
                    predecessor.right = null; // removing the thread.
                    data.push(node.value);
                    node = node.right;
                }
            }
        }
        return data;
    }

    // MORRIS PRE-ORDER TRAVERSAL

    // only one line change with inorder....
    morrisPreOrderTraversal() {
        let data = [], node = this.root;

        while (node) {
            if (!node.left) {
                data.push(node.value); // Visit the node
                node = node.right; // Move to the right subtree
            } else {      // Find the rightmost node of the left subtree
                let predecessor = node.left;

                while (predecessor.right && predecessor.right !== node) {
                    predecessor = predecessor.right; // finding right-most node.
                }

                if (!predecessor.right) {
                    predecessor.right = node; // creating a thread link.
                    data.push(node.value);
                    node = node.left; // Move to the left subtree
                } else {
                    predecessor.right = null; // removing the thread.
                    node = node.right;
                }
            }
        }
        return data;
    }

}

let tr = new BST();
tr.insert(5);
tr.insert(3);
tr.insert(8);
tr.insert(2);
tr.insert(4);
tr.insert(10);
// console.log('tr>>>>>>>>>>>', tr);
// console.log('find>>>>>>>>>>>', tr.find(25));
// console.log('dfs', tr.dfsInOrderRecursive());
console.log('dfs', tr.dfsPreOrderRecursive());
// console.log('dfs', tr.dfsPostOrderRecursive());
// console.log('dfs', tr.dfsPostOrderIterative());
console.log('morris', tr.morrisPreOrderTraversal());