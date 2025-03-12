// removeNthNodeFromEndOfList - leet code - medium

// pseudocode:
// Calculate the length of the linked list
// Edge case: if we need to remove the first node
// return the head without the nth index
// Find the index of the node to be removed
// Traverse the list to find the previous node of the node to remove
// Remove the nth node
// Return the modified list

// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]


var removeNthFromEnd = function (head, n) {
    if (!head) return null;

    let lengthOfList = 0;
    let current = head;

    // Calculate the length of the linked list
    while (current) {
        lengthOfList++;
        current = current.next;
    }

    // Edge case: if we need to remove the first node
    if (lengthOfList === n) {
        return head.next;  // return the head without the nth index
    }

    let removeIndex = lengthOfList - n;  // Find the index of the node to be removed
    let prevNode = head;

    // Traverse the list to find the previous node of the node to remove
    for (let i = 1; i < removeIndex; i++) {
        prevNode = prevNode.next;
    }
    //     1  2  3  4  5  6             2

    // Remove the nth node
    prevNode.next = prevNode.next.next;
    return head; // Return the modified list
};
