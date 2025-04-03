
// house robber - leetcode - medium

// pseudocode:
// make 2 vars rob1 and rob2 as 0 initially
// start a for of loop
// in there, check the max value of val+rob1 with rob2
// after that, assign this rob2 to rob1 and add the max to rob2
// return rob2. 

let rob = (nums) => {
    let rob1 = 0;
    let rob2 = 0;

    for (let val of nums) {
        let decision = Math.max(val + rob1, rob2);
        rob1 = rob2;
        rob2 = decision;
    }
    return rob2;
}

console.log(rob([1, 2, 3, 1]))