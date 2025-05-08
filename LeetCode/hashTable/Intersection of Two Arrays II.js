
// Intersection of Two Arrays II


var intersect = function (nums1, nums2) {
    let result = [];
    let map = new Map();
    let greater, smaller;
    if (nums1.length >= nums2.length) {
        greater = nums1;
        smaller = nums2;
    } else {
        greater = nums2;
        smaller = nums1;
    }

    for (let i = 0; i < smaller.length; i++) {
        if (!map.has(smaller[i])) {
            map.set(smaller[i], 1);
        } else {
            map.set(smaller[i], map.get(smaller[i]) + 1);
        }
    }

    for (let i = 0; i < greater.length; i++) {
        if (map.has(greater[i]) && map.get(greater[i]) > 0) {
            result.push(greater[i]);
            map.set(greater[i], map.get(greater[i]) - 1);
        }
    }

    return result;
};