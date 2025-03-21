
// serialize and deserialize a binary tree - leetcode - hard

// pseudocode:
// first take a var result array
// make a recursion fn
// if root is null, add this null as a string 'null' and push to result
// after that, use recursive node.left and right calls
// after the recursion fn, use this result to join with comma to string type
// then return. serialized successfully. done

let serialize = (root) => {
    let result = [];

    function preOrder(node) {
        if (!node) {
            result.push('N');
            return;
        }
        result.push(node.val);
        preOrder(node.left);
        preOrder(node.right);
    }
    preOrder(root);
    return result.join(',');
}

// deserialize

// pseudocode:
// convert string back to an array
// make a var index as 0 
// make a recursive fn
// first take the array value to a nodeVal var with the index pointer
// after that make index++ to move the array pointer
// now check, the nodeVal is N (for checking null)
// if N, then move index pointer(++) and return null
// after that, create node with treenode with value nodeVal(use parseInt)
// then use node.left to call the recursion fn and assign without sending any args
// then same like node.right.
// after that , return node.
// after the loop, invoke this fn with no args . and return this invokation

let deserialize = (data) => {
    let nodeString = data.split(','); // array
    let index = 0;

    function rebuildTree() {
        let nodeVal = nodeString[index];

        if (nodeVal === 'N') {
            index++;
            return null;
        }

        let node = new TreeNode(parseInt(nodeVal));
        index++;

        node.left = rebuildTree();
        node.right = rebuildTree();
        return node;
    }
    return rebuildTree();
}