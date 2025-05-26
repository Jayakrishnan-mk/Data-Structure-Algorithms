

//  for solving this, in an O(N) tc and sc, we can do :
// first, edge case, check , if head is null,return head.
// take the head to curr var
// loop the curr
// create new node of curr.val and assign to a copyNode var
// then add to map. original node ---> copied node
// again, assign the head to current var
// loop current again
// take the copyNode with map.get(current).
// then , make the next of copyNode with map.get(current.next).
// same like random, 
// atlast, return the map.get(head). done


var copyRandomList = function (head) {
    if (!head) return null;

    let current = head;
    let map = new Map();

    while (current) {
        let copyNode = new _Node(current.val);
        map.set(current, copyNode);
        current = current.next;
    }

    current = head;

    while (current) {
        let copyNode = map.get(current);
        copyNode.next = map.get(current.next) || null;
        copyNode.random = map.get(current.random) || null;

        current = current.next;
    }

    return map.get(head);
};

