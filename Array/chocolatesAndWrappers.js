
// chocolatesAndWrappers - hacker rank - easy

// greedy problem.....

// question link: https://www.hackerrank.com/challenges/chocolate-feast/problem

let money = 15;
let cost = 1;
let wrapForFree = 3;
let chocolates = money / cost;
let wrappers = chocolates;

while (wrappers >= wrapForFree) {
  let free = Math.floor(wrappers / wrapForFree);
  chocolates += free;
  wrappers = free + (wrappers % wrapForFree);
}
console.log(chocolates); // 22
