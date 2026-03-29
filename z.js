// Examples:
// reverseString("hello")   // "olleh"
// reverseString("racecar") // "racecar"
// reverseString("nodejs")  // "sjedon"
// reverseString("hi")      // "ih"

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
