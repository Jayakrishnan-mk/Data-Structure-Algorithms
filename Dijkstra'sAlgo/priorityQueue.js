
// base - priority queue

// pseudocode:
// make an enqueue, dequeue, sort fns in queue class

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        this.values.push({ val, priority });
        this.sort();
    }

    dequeue() {
        return this.values.shift();
    }

    sort() {
        this.values.sort((a, b) => a.priority - b.priority); // O(n log n)
    }

}

let q = new PriorityQueue();
q.enqueue('A', 5);
q.enqueue('B', 8);
q.enqueue('C', 2);
q.enqueue('D', 18);
q.enqueue('D', 20);
q.enqueue('D', 118);

// q.dequeue();
console.log('qq', q.values);