

// bottom view - binary tree - DFS.....

// check the node is null, return [].
// make a map
// use a dfs recursion fn 
// and invoke that with passing root, 0,and 0 as
// node, hd(horizontal distance) and depth
// check, the node is null, then return;
// then, check the hd is in the map, if its not
// check, add the hd with an object {node.val , depth}
// if it is, then, check this: depth > map.get(hd).depth 
// if it is, then update with this depth
// after this, call dfs with node.left, hd-1, depth+1
// same like right, hd+1, depth + 1
// after the all loops, sortedArray = Array(map.keys()).sort((a,b) => a-b) ascending sort the keys of the map
// then, retArray = sortedArray.map((item) => map.get(item).val)
// atlast return this array.

let binaryTreeTop = (root) => {
    if (!root) return [];

    let map = new Map();

    (function dfs(node, hd, depth) {
        if (!node) return;

        if (!map.has(hd)) {
            map.set(hd, { val: node.val, depth });
        } else {
            if (map.get(hd).depth < depth) {
                map.set(hd, { val: node.val, depth });
            }
        }

        dfs(node.left, hd - 1, depth + 1);
        dfs(node.right, hd + 1, depth + 1);
    })(root, 0, 0);

    let sorted = Array.from(map.keys()).sort((a, b) => a - b);
    return sorted.map((item) => map.get(item).val);
}