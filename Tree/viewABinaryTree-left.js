// viewing a BinaryTree - left view 

// view:       // input - [1, 2, 3, 4, 5, null, 6]
//        1
//       / \
//      2   3
//     / \   \
//    4   5   6

//  output : [1, 2, 4]

// pseudocode:
// check root is null, the return [].
// take a queue and a result var
// make a loop with queue.length check
// take the queue.shift() to a node.
// inside that, make an another loop with for
// before that, use a size var for checking the queue.length
// take the level array to push
// and use the for loop with checking less than the size.len
// inside for loop, check the i is 0, then push it to level array 
// then push to queue with node.left and right values
// after this for loop, push the level array to result array
// after every loop, return the result.

// level order / bfs approach.......................
let leftView = (root) => {
    if (!root) return [];
    let queue = [root], result = [];

    while (queue.length) {
        let size = queue.length;

        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            if (i === 0) result.push(node.val); // First node in this level

            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
    }
    return result;
}

console.log(leftView([1, 2, 3, 4, 5, null, 6]))