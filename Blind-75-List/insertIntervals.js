
// insert intervals - leetcode - medium

// solution vid : https://www.youtube.com/watch?v=NHXA2DyqrgA&list=PLTrfx5ibNG1qPvnHyq79xkuAWGdb8ZTZ9&index=6&t=11s&ab_channel=WeCodeMalayalam

//  pseudocode:
// make a result array
// make a loop for iterate intervals
// take the interval item as [start,end]
// check in that loop
// if, the start > newInterval[1]
// then push this newInterval to result (it will come before the item in the array)
// and concat the result with rest of the intervals part using slice. and return.
// else if, end < newInterval[0]
// push newInterval to result. it will come after the item in result.continue the loop.
// atlast, in else, 
// this will be the case, we need to merge the item array
// take the newInterval[0] as min of newInterval[0] and start
// take the newInterval[1] as max of newInterval[1] and end
// after the loop, push this newInterval to result. done. return result.

var insert = function (intervals, newInterval) {
    let res = [];

    for (let i = 0; i < intervals.length; i++) {
        let [start, end] = intervals[i];

        if (start > newInterval[1]) {
            res.push(newInterval);
            return res.concat(intervals.slice(i));
        } else if (end < newInterval[0]) {
            res.push(intervals[i]);
        } else { // merge case......
            newInterval[0] = Math.min(start, newInterval[0]);
            newInterval[1] = Math.max(end, newInterval[1]);
        }
    }
    res.push(newInterval);
    return res;
};

console.log(insert(intervals = [[1, 3], [6, 9]], newInterval = [2, 5]))
//  Output: [[1,5],[6,9]]
// console.log(insert(intervals = [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], newInterval = [4, 8]))
// Output: [[1,2],[3,10],[12,16]]
