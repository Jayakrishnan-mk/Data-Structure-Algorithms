// container with most water - leet code - medium

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

        // Move the shorter line inward
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));