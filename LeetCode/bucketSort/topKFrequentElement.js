
// top k frequent elements - leetcode - medium

// approach - bucket sort algo ...........

// pseudocode:
// make a hashmap to add the value and count
// loop the array and push to map
// after that make a bucket with empty array
// then loop the hm and add the value of the count to the bucket
// atlast,loop the buckets and push the values to new array.
// then slice the values with k and return.

var topKFrequent = function (nums, k) {
    const frequencyMap = new Map();

    // Step 1: Count the frequency of each element
    nums.forEach(num => {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    });
    console.log('freq', frequencyMap)

    // Step 2: Create an array of arrays where the index is the frequency
    const buckets = Array(nums.length + 1).fill().map(() => []);

    console.log('buckets', buckets)

    // Step 3: Group numbers by their frequency
    frequencyMap.forEach((freq, num) => {
        buckets[freq].push(num);
    });
    console.log('buckets', buckets)

    // Step 4: Collect the top k frequent elements
    const result = [];
    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
        if (buckets[i].length > 0) result.push(...buckets[i]);

    }

    return result.slice(0, k);
};

console.log(topKFrequent([1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3], 2))