// linked list cycle - leet code - easy

// pseudocode:
// use twoPointers slow and fast and assign the head
// use while loop to check the fast !== null and slow !== null
// if comes to outside loop, return false
// inside the loop, make the slow as head.next and fast as head.next.next
// fast will traverse fastly to find slow
// if slow === fast, then return true

// floyd's cycle detection / turtoise and hare algorithm
var hasCycle = function (head) {
    let slow = head, fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next, fast = fast.next.next;
        if (slow === fast) return true;
    }
    return false;
};

