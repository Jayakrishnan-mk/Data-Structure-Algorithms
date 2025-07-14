

// remove duplicates from sorted array




// make a pointer in starting
// make the unique values to first
// then pointer++
// atlast, return the array

var removeDuplicates = function(nums) {  
   let pointer = 0;
    
    for(let i = 0; i<nums.length ; i++) {
        if(i === 0 || nums[i] !== nums[i-1]) {
            nums[pointer] = nums[i] ;
            pointer++;
        }
    }
    nums.length = pointer;
};


