
// convert the string to an array using split. bcs string is immutable.
// create a last var for decreasing from end
// loop the array and swap items of first and last.
// go till half of the array length
// once done, return array using join.

// tc = o(N), sc = O(N)

function reverseString(str) {
    let array = str.split('');

    let last = array.length - 1;
    for (let first = 0; first < array.length / 2; first++) {
        [array[first], array[last]] = [array[last], array[first]];
        last--;
    }
    return array.join('');
}

console.log(reverseString('hello'));

// Examples:
// reverseString("hello")   // "olleh"
// reverseString("racecar") // "racecar"
// reverseString("nodejs")  // "sjedon"
// reverseString("hi")      // "ih"

// ----------------------------------------------------------------------------------------------

// or
// another approach....


// input: "this is a string"
// output: "gnir ts a sisiht"
// Reverse the string but the space will be same.


// strings are immutable. so we cant directly swap the letters/digits
// so we need to make it to one array using split. then only start.

// first make a var char as splitting the string
// create vars i and j as 0 and len-1
// now, make a while loop that i < j
// if i is a space, i++
// if j is a space, j--
// otherwise, swap the i and j items. and i++,j--
// in the end, return char array as string by joining.

let reverseString = (str) => {
    let char = str.split('');
    let i = 0;
    let j = char.length - 1;

    while (i < j) {
        if (char[i] === ' ') {
            i++;
        }
        else if (char[j] === ' ') {
            j--;
        } else {
            [char[i], char[j]] = [char[j], char[i]];
            i++;
            j--;
        }
    }
    return char.join('');
}

console.log(reverseString("this is a string"));
// ✅ Output: "gnir ts a sisiht"

console.log(reverseString("this is a string hell"))
// output: "lleh gn i rtsasi siht"