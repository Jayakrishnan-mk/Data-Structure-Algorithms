
// /*
// You have been given a list of products which is having property productName, quantity and description.


// PROBLEM STATEMENTS:

// 1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.

// Sample Output for the given listOfProducts will be :

// {
//   "TV": 2,
//   "AC": 2,
//   "FAN": 1
// }


const listOfProducts = [{
  productName: "TV",
  quantity: 10,
  description: "television"
},
{
  productName: "AC",
  quantity: 5,
  description: "air conditioner"
},
{
  productName: "TV",
  quantity: 10,
  description: "television"
},
{
  productName: "AC",
  quantity: 5,
  description: "air conditioner"
},
{
  productName: "FAN",
  quantity: 10,
  description: "Ceiling Fan"
}
];

function getUniqueProductCount(data) {
  let map = new Map();

  listOfProducts.map((prod) => {
    if (!map.has(prod.productName)) {
      map.set(prod.productName, 1);
    } else {
      map.set(prod.productName, map.get(prod.productName) + 1);
    }
  });

  // let res = {};
  // map.forEach((val, key) => {
  //   res[key] = val;
  // })

  return Object.fromEntries(map);
}

console.log(getUniqueProductCount(listOfProducts));


// 2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.

// Sample Output for the given listOfProducts will be :

// [{
//     productName: "TV",
//     quantity: 20,
//     description: "television"
//   },
//   {
//     productName: "AC",
//     quantity: 10,
//     description: "air conditioner"
//   },
//   {
//     productName: "FAN",
//     quantity: 10,
//      description: "Ceiling Fan"
//   }
// ]

function getUniquePrducts(listOfProducts) {
  // create a hashmap first to add the productName and the quantity of that
  // then, if item is there, then add the quantity only with current
  // after that, create a res array
  // then loop the listofproducts, and check the item is in hashmap
  // if it is, take the quantity from hashmap, the remaining fields are same as listOfProducts
  // push this to res. done

  // atlast, try these both points in reduce method.
}

console.log(getUniquePrducts(listOfProducts));