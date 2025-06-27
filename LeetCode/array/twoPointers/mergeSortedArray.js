
// merge sorted array - leetcode - easy


// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, 
// and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.
// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. 
// To accommodate this, nums1 has a length of m + n, where the first m elements -
// denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. 
// nums2 has a length of n.

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]

var merge = function (nums1, m, nums2, n) {

    // O((m + n) × log(m + n)) :-
    // nums1 = nums1.slice(0, m).concat(nums2).sort();

    // O(m + n) :-
    let i = m - 1, j = n - 1;  // for getting the last item of both arrays.
    let len = nums1.length - 1;

    while (j >= 0) {
        if (i < 0) {
            nums1[len] = nums2[j];
            j--;
        } else if (nums1[i] <= nums2[j]) {
            nums1[len] = nums2[j];
            j--;
        } else {
            nums1[len] = nums1[i];
            i--;
        }
        len--;
    }
    return nums1;
};

console.log(merge(nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3))
console.log(merge(nums1 = [0], 0, [1], 1))
console.log(merge([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3))

