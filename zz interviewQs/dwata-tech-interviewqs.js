

// ===========  1  ===============================================================================

const array = [1,2,3,4,5];

// console.log(array.reverse());

let last = array.length - 1;
for(let i = 0; i<array.length/2; i++) {
  let temp = array[i];
  array[i] = array[last];
  array[last] = temp;
  last--;
}
console.log(array);



// ===========  2  ===============================================================================

// let input = [
// {id:1,name:"suraj"},
// {id:2,name:"rohan"},
// {id:1,name:"rahul"},
// {id:3,name:"aditya"},
// ]
// output - [
// {id:1,name:[suraj,rahul]},
// {id:2,name:[rohan]},
// {id:3,name:[aditya]},
// ]

// pseudocode:
// create a hm and add the id and name(array)
// if the id is same, push to array
// atlast, destructure this map to an output array.


let input = [
{id:1,name:"suraj"},
{id:2,name:"rohan"},
{id:1,name:"rahul"},
{id:3,name:"aditya"},
]


function schoolDetails (input) {
  let hm = new Map();
  let output = [];
  
  for(let i of input) {
    if(hm.has(i.id)) {
      hm.get(i.id).push(i.name);
    } else {
      hm.set(i.id, [i.name]);
    }
  }
  
  hm.forEach((item, value) => {
    output.push({id: value, name: item})
  }) 
  return output;
}

console.log(schoolDetails(input));

