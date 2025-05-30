
// linked list cycle - leetcode - easy

// floyd's turtoise and hare's algorithm

var hasCycle = function (head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (fast == slow) return true;
    }
    return false;
};