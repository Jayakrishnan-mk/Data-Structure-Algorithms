// viewing a BinaryTree - right view

// view:       // input - [1, 2, 3, 4, 5, null, 6]
//        1
//       / \
//      2   3
//     / \   \
//    4   5   6

//  output : [1, 3, 6]

// pseudocode:
// edge case - if root is null - return [];
// take the vars result and queue
// start a while loop, with checking the queue.length
// push the root to queue before that
// inside while, make a var size with queue length
// start a for loop inside that.
// set node from taking queue.shift()
// then, if i === size-1, then push it to result
// then, check node.left and right are there, if there, push to queue
// after the end of the loop, return result array

// level order / bfs approach.........

let rightView = (root) => {
    if (!root) return [];

    let queue = [root];
    let result = [];

    while (queue.length) {
        let size = queue.length;

        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            if (i === size - 1) result.push(node.val); // last node in this level

            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
    }
    return result;
}

console.log(rightView([1, 2, 3, 4, 5, null, 6]))


// dfs approach - preorder(but starting from right side)...

// var rightSideView = function (root) {
//     if (!root) return [];
//     let result = [];

//     (function dfs(node, depth) {
//         if (!node) return;
//         if (depth === result.length) {
//             result.push(node.val);
//         }

//         dfs(node.right, depth + 1);
//         dfs(node.left, depth + 1);
//     })(root, 0);
//     return result;
// };