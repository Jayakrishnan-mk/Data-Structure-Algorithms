
// containerWithMostWater - leetcode - medium

// using two pointers approach
// first take left and right vars
// as 0 and len-1 initially. and a area as 0 initially.
// and a var for maxArea as 0.
// find the area with the length(right-left initially) and height
// height will be the whichever is lowest or equal in left and right
//  and this area assign to max var
// then check,whichever is lower or equal (left or right), 
// and move that size to one distance accordingly
// in the end,return the max

var maxArea = function (height) {
    let left = 0, right = height.length - 1;
    let area = 0, maxArea = 0;

    while (left < right) {
        area = (right - left) * (Math.min(height[left], height[right]))
        maxArea = Math.max(area, maxArea);

        if (height[left] >= height[right]) {
            right = right - 1;
        } else {
            left = left + 1;
        }
    }
    return maxArea;
};

console.log(maxArea(height = [1, 8, 6, 2, 5, 4, 8, 3, 7]))