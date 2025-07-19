

// third maximum number - leetcode - easy

// create a set
// add the array to set for unique values get
// iterate from last in the set of the unique
// if the unique array length has < 3, then return the unique[0]

var thirdMax = function (nums) {
    let set = new Set(nums);
    let unique = [...set];

    unique.sort((a, b) => b - a);

    if (unique.length < 3) return unique[0];

    console.log(unique);
    return unique[2];
};


console.log(thirdMax(nums = [3, 2, 1]))