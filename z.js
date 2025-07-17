

// remove element

var removeElement = function(nums, val) {
    let pointer = 0;
    
    for(let i = 0; i<nums.length; i++) {
        if(nums[i] !== val) {
            [nums[i], nums[pointer]] = [nums[pointer],nums[i]];
            pointer++;
        }
    }
    nums.length = pointer;
};
