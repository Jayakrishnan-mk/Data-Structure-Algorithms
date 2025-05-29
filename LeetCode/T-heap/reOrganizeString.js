
// reorganize string - leetcode - medium


// we've to do this in 5 steps mainly.
// with an o(n log k) time complexity

// first, we will add the letters and freq of that to a map
// this is for the freq count

// second, we'll make a maxHeap, by sorting according to the map's freq count
// in descending order, and add to an array using object.entries.

// third, we'll check the edge case, that is, 
// this first element of heap[0][1] value is greater than roundup
// roundup means - s.length / 2. half of the input length
// if its greater, we cant make this. so return "".

// fourth, we got heap. now, we need to make a while loop.
// loop, with checking, heap.length >= 2, then 
// we need to shift 2 items from that in [char, freq] method
// then, we need to push both to a result array
// then decrease freq-- from both. then check, if freq is !== 0, then push to heap again. same like second item also.
// after that sort the heap again in descending order of freq

// fifth and last step, check now, the maxheap length eq 1,
// then, we need to check the freq of that, if it is gt than 1, return "".
// because its not possible.
// if it is 1 or lt 1, then push to result directly. 
// at the end, return the result with joining "".


var reorganizeString = function (s) {
    let freqMap = new Map();

    // Step 1: Count frequencies
    for (let char of s) {
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }


    // Step 2: Create max heap
    const maxHeap = [...freqMap.entries()].sort((a, b) => b[1] - a[1]);

    // Step 3: Edge case check.
    let roundup = Math.ceil(s.length / 2);
    if (maxHeap[0][1] > roundup) return "";
    // edge case - if any of the value's freq is greater than the half of the s length
    // then we cant possible to make this.

    const result = [];

    while (maxHeap.length >= 2) {
        // Step 4: Pick top 2 chars
        let [char1, freq1] = maxHeap.shift();
        let [char2, freq2] = maxHeap.shift();

        result.push(char1);
        result.push(char2);

        if (--freq1 > 0) maxHeap.push([char1, freq1]);
        if (--freq2 > 0) maxHeap.push([char2, freq2]);

        // Re-sort heap
        maxHeap.sort((a, b) => b[1] - a[1]);
    }

    // Step 5: Check if any one char left
    if (maxHeap.length === 1) {
        let [lastChar, lastFreq] = maxHeap[0];
        if (lastFreq > 1) return ""; // Not possible
        result.push(lastChar);
    }

    return result.join("");
};

console.log(reorganizeString("aab"))

// 🔍 Time and Space:
// ⏱ Time: O(n log k), where n = length of string, k = number of unique chars.

// 💾 Space: O(n) for result and map.