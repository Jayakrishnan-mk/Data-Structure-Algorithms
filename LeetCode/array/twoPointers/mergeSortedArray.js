
// merge sorted array - leetcode - easy



// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]

var merge = function (nums1, m, nums2, n) {

    // O((m + n) × log(m + n)) :-
    // nums1 = nums1.slice(0, m).concat(nums2).sort();

    // O(m + n) :-
    let i = m - 1, j = n - 1;
    let len = nums1.length - 1;

    while (j >= 0) {
        if (i < 0) {
            nums1[len] = nums2[j];
            j--;
            // len--;
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