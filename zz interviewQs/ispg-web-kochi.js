// let str = 'react';
// if a and c are adjacent, then it would be change.
// so result would be 'recat'
// Another example -
// let str = 'reaccactacca';  output: 'recaacctcaac'

function changeAdjacents(str) {
  let strArray = [];
  for (let i of str) {
    strArray.push(i);
  }
  for (i = 0; i < strArray.length; i++) {
    if (
      (strArray[i] == "a" && strArray[i + 1] == "c") ||
      (strArray[i] == "c" && strArray[i + 1] == "a")
    ) {
      [strArray[i], strArray[i + 1]] = [strArray[i + 1], strArray[i]];
      i++;
    }
  }
  strArray = strArray.join("");
  return strArray;
}

console.log(changeAdjacents("reaccactacca"));
