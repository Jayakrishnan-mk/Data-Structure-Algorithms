
// reverse a linked list - leetcode - easy


//  pseudocode:
// edge case - head is null, return null
// loop the list with while loop
// assign head to curr
// make a var prev as null and a var next also.
// inside loop, 
// next = curr.next
// curr.next = prev
// prev = curr
// curr = next
// after loop, return prev.

var reverseList = function (head) {
    if (!head) return null;
    let curr = head;
    let prev = null, next;
    while (curr) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};