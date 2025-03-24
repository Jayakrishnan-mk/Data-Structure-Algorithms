
// top k frequent element

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// approach - min heap solution (Priority queue) ......

// pseudocode:
// make a hm. make a loop and add the count and val
// make a minheap with the priority of frequency
// push the value to the heap
// while pushing, check the length of the heap. 
// if greater than k, pop the value
// atlast, traverse the heap and add the result to an array and return 

let PQ = require('js-priority-queue')

var topKFrequent = function (nums, k) {
    let freqHm = new Map();

    nums.forEach((item) => {
        freqHm.set(item, (freqHm.get(item) || 0) + 1);
    })

    let minHeap = new PQ({
        comparator: ((a, b) => a[1] - b[1])
    })

    freqHm.forEach((freq, val) => {
        minHeap.queue([val, freq]); // push the value according to the frequency
        if (minHeap.length > k) minHeap.dequeue();
    })
    let result = [];
    while (minHeap.length > 0) {
        result.push(minHeap.dequeue()[0]);
    }
    return result;
}

console.log(topKFrequent(nums = [1, 2, 2, 2, 2, 5, 5, 5, 5, 5, 5, 5, 5], 2))