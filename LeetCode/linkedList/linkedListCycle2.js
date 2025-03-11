// linked list cycle II - leet code - medium

// pseudocode:
// Using hash table.
// use while loop.
// check the head is in hashTable.
// if it is , return true.
// if its not, then add it to hashTable
// when the loop ends, return false.
// because its successfully completed the list(through finding null as next value)

// using hashTable....
var hasCycle = (head) => {
    let ht = new Set();

    while (head) {
        if (ht.has(head)) return true;
        else ht.add(head);
        head = head.next;
    }
    return false;
}