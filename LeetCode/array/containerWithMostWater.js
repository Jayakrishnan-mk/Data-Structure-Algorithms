// container with most water - leet code - medium

// pseudocode:
// make two variables left and right
// use two pointers method
// and maxArea variable declaration
// use while loop. and check the area
// area is length * width. in this case, right-left is the width(containing water)
// to find length, take the min of left and right of array
// check the area with maxArea. if maxArea is small, then reassign area to maxArea.
// if left pointer value is less than right side, increment left. otherwise decrement right
// return maxArea

var maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;
    // area is length * width
    let maxArea = 0;

    while (left < right) {
        // Calculate current area
        let area = (right - left) * Math.min(height[left], height[right]);
        // here width = right - left
        maxArea = Math.max(maxArea, area);

        // Move the shorter line inward. sliding window....
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));