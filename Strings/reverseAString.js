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