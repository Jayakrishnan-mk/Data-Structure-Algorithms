
// daily temperatures - medium

//  create a monotonic stack
// make a answer array with filling 0 in the temperatures array length
// loop the temperatures array
// and make a while loop with, the stack.length is 0 and temperatures[i] > temperature[stack[stack.length -1]]
// then , pop the stack to a prevIndex var
// and make the answer of previndex as i-prevIndex
// after this while,push the i to stack
// after the loop,return answer array.



var dailyTemperatures = function (temperatures) {
    let stack = [];
    let answer = Array(temperatures.length).fill(0);

    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            let prevIndex = stack.pop();
            answer[prevIndex] = i - prevIndex;
        }
        stack.push(i);
    }
    return answer;
};