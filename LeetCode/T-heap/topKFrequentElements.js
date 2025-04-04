// top k frequent elements

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// approach - min heap solution ......

// const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
const PQ = require('js-priority-queue');

var topKFrequent = function (nums, k) {
    const frequencyMap = new Map();

    // Count the frequency of each element
    nums.forEach(num => {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    });

    // Create a min-heap based on frequencies using the PriorityQueue
    const minHeap = new PQ({
        comparator: (a, b) => a[1] - b[1] // this '1' is the index (freq) in the minHeap.queue([num,freq]). 
    });                                  // bcs priority queue is based on the frequency we're making.


    // Add each element and its frequency to the heap
    frequencyMap.forEach((freq, num) => {
        minHeap.queue([num, freq]);  // push the value according to the frequency
        if (minHeap.length > k) { // in @datastructures-js/priority-queue module, 'minHeap.size' is correct. not length
            minHeap.dequeue(); // Remove the least frequent element if heap exceeds size k
        }
    });

    // Extract the elements from the heap
    const result = [];
    while (minHeap.length > 0) { // in @datastructures-js/priority-queue module, 'minHeap.size' is correct. not length
        result.push(minHeap.dequeue()[0]);
    }
    

    return result;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));  // Expected output: [1, 2]


// approach - bucket sort algo ...........
// O(N) or O(N log N) - bucket sort

// pseudocode:
// make a hashmap to add the value and count
// loop the array and push to map
// after that make a bucket with empty array
// then loop the hm and add the value of the count to the bucket
// atlast,loop the buckets and push the values to new array.
// then slice the values with k and return.

// var topKFrequent = function (nums, k) {
//     const frequencyMap = new Map();

//     // Step 1: Count the frequency of each element
//     nums.forEach(num => {
//         frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
//     });

//     // Step 2: Create an array of arrays where the index is the frequency
//     const buckets = Array(nums.length + 1).fill().map(() => []);


//     // Step 3: Group numbers by their frequency
//     frequencyMap.forEach((freq, num) => {
//         buckets[freq].push(num);
//     });

//     // Step 4: Collect the top k frequent elements
//     const result = [];
//     for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
//         if (buckets[i].length > 0) result.push(...buckets[i]);

//     }

//     return result.slice(0, k);
// };

// console.log(topKFrequent([1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3], 2))