// a. most common fruit using overall?
// b. in bangalore, which fruit is selling more?

obj = {
  bangalore: [0, 0, 1, 1, 1, 2, 2],
  Chennai: [0, 1, 1, 2, 2, 2, 2],
  pune: [0, 0, 1, 1, 1, 1, 2],
};

fruitmap = {
  mango: 0,
  apple: 1,
  orange: 2,
};

function getMaxFruitSale(obj, fruitmap) {
  let hm = new Map();

  for (item in obj) {
    for (i of obj[item]) {
      hm.set(i, (hm.get(i) || 0) + 1);
    }
  }
  console.log(hm);
  let max = 0;
  let maxFruit;
  for (let [key, val] of hm) {
    if (val > max) {
      max = val;
      maxFruit = key;
    }
  }

  for (let item in fruitmap) {
    if (maxFruit == fruitmap[item]) {
      return item;
    }
  }
}

console.log(getMaxFruitSale(obj, fruitmap));
