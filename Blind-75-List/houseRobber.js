
// house robber - leetcode - medium

// pseudocode:
// first make 2 vars rob1 and rob2
// then make a for of loop
// take a var decision and assign the value,-
// the max of i+rob1 or rob2
// then rob1 will be rob2
// rob2 will be decision
// after loop, return rob2.

var rob = function (nums) { // [1,2,3,1]
    let rob1 = 0, rob2 = 0;

    for (let i of nums) {
        let decision = Math.max((i + rob1), rob2);
        rob1 = rob2;
        rob2 = decision;
    }
    return rob2;
};

console.log(rob([2, 1, 3, 8, 5, 11]))