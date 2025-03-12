// mergeTwoSortedLists - leet code - easy

// pseudocode:
// Create a dummy node to serve as the starting point for the merged list
// Traverse both lists and merge them
// Compare the current nodes of both lists
// Attach list's node to the merged list
// Move the pointer of lists
// atlast move the pointer of the merged list
// If any of the lists still have remaining nodes, append them
// Return the merged list starting from the node after the dummy node

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */


var mergeTwoLists = function (list1, list2) {
    let dummy = new ListNode(-1);  // Create a dummy node
    let current = dummy;  // Pointer to build the merged list
    // Traverse both lists and merge them
    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {  // Choose the smaller node
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;  // Move current pointer
    }
    // If any of the lists still have remaining nodes, append them
    if (list1 !== null) {
        current.next = list1;
    }
    if (list2 !== null) {
        current.next = list2;
    }
    // Return the merged list starting from the node after the dummy node
    return dummy.next;
};