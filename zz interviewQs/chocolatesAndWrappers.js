
// chocolatesAndWrappers - hacker rank - easy
// question link: https://www.hackerrank.com/challenges/chocolate-feast/problem

// greedy problem.....

// kognito kube - interview ? - hyderabad startup

// rahul has 15₹. he need to buy maximum chocolates to eat. one chocolate has 1₹.
// the shopper gave him an offer. 
// If returning 3 wrappers of the chocolate, shopper will give 1 extra chocolate as free.
// then maximum how many chocolate rahul can eat with this money?

// output - 22.  ==== 15  +  5  +  1  +  1
//                         15/3   5/3   3/3
let money = 15;
let cost = 1;
let wrapForFree = 3;

let totalPossibleChocolates = money / cost;
let wrappers = totalPossibleChocolates;

while (wrappers >= wrapForFree) {
  let freeChoc = Math.floor(wrappers / wrapForFree);  // 1
  let remWrap = wrappers % wrapForFree;   // 0
  totalPossibleChocolates += freeChoc; // 22
  wrappers = freeChoc + remWrap;
}
console.log(totalPossibleChocolates);

