


// 🟦 Missing Number
// One number missing in 0…n range → find it.


function findMissingNumber(nums) {
    let n = nums.length;
    let total = (n * (n + 1)) / 2;

    let sum = 0;
    for (let i of nums) {
        sum += i;
    }
    return total - sum;
}

console.log(findMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]))

// let Input = [3, 0, 1]
// Output= 2

// let Input= [0, 1]
// Output= 2

// let Input= [9,6,4,2,3,5,7,0,1]
// Output= 8
