// reverseLinkedList - leet code - easy

// Reversing the list.
// Using while loop with changing next and prev
// Traverse the reversed list and return prev.

var reverseList = function (head) {
    if (!head) return null;
    let next; prev = null;
    let node = head;
    // Reverse the linked list
    while (node) {
        next = node.next; // Store next node     
        node.next = prev; // Reverse the link  
        prev = node;     // Move prev forward 
        node = next;     // Move node forward
    }
    return prev;
};