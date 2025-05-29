


// first sort the first element of every intervals
// bcs, this helps to merge intervals which is overlapping
// then, add the first interval to a result array initially
// then, loop the input. start from i = 1. bcs,0 we already pushed to result
// now, take the i'th item of interval and keep in c,d variables for flexibility
// then take the last pushed item from result, and assign to a,b vars.
// now check, b>=c - means, the result's second item is gt eq to c
// if it is, then we need to merge. bcs,its overlapping
// and the last item/second item of these arrays we need to consider, 
// which is maximum, we need to take that as last item. and change this in result array
// if b not gt / eq to c, then like normal way, we will push the [c,d] to result. done
// at the end,return result.


var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    let result = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        let [c, d] = intervals[i]; // so c,d is the current interval

        let resultItem = result[result.length - 1]
        let [a, b] = resultItem; // last added interval in result

        if (b >= c && b < d) {
            let tempRes = [a, d];
            result[result.length - 1] = tempRes;
        } else {
            result.push([c, d])
        }
    }

    return result;
};


console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]))