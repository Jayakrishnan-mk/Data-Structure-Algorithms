


// if arr length is < 3, then return false.
// loop the arr. and add the items to a set
// if set has same item, i mean if item is duplicate, return false
// create next loop, for checking its in increasing and decreasing order
// in the start, it will be increase. when reaching an item, that is decrease, 
// from there, need to check, every item is properly decreasing or not
// if not, return false

// var validMountainArray = function(arr) {
//     if(arr.length < 3) return false;
    
//     let set = new Set();
//     for(let i of arr) {
//         if(set.has(i)) return false;
//         set.add(i);
//     }
    
//     for(let i = 1; i < arr.length; i++) {
//         if(arr[i]  )
//     }
// };