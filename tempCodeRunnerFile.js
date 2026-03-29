function reverseString(str) {
    let array = str.split('');

    let last = array.length - 1;
    for (let first = 0; first < array.length; first++) {
        [array[first], array[last]] = [array[last], array[first]];
        last--;
    }
    return array.join('');
}