


let moveZeroes = (nums) => {
    if (nums.length === 1) return nums;
    let pointer = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            let temp = nums[i];
            nums[i] = nums[pointer];
            nums[pointer] = temp;

            pointer++;
        }
    }
    return nums
};

console.log(moveZeroes(nums = [1, 2, 0, 3, 0, 4]))