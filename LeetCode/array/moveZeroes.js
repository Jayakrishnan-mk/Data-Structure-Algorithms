// move zeroes - leet code - easy

//  pseudocode:
// make a pointer
// then use a for loop
// if the item is 0, then continue
// if its not, 
// check, if i equals pointer. 
// if its not, then add that item value to pointer index, 
// and, make the currentItem value as 0
// after that, pointer++

var moveZeroes = function (nums) {
    let pointer = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            if (pointer !== i) {
                nums[pointer] = nums[i];
                nums[i] = 0;
            }
            pointer++;
        }
    }
    return nums;
};

console.log(moveZeroes([0, 1, 0, 10, 8, 0, 3, 12]))