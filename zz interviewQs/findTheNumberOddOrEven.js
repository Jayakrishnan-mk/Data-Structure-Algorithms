
// a variable's value is 12345. this is not a string. its an integer.
// you need to find, the second digit(from left side) of this integer is odd or even
// dont convert the type to string or others. 
// return its odd or even.


function checkDigit(number) {

    while (true) {
        if (number < 100) {
            let secondDigit = number % 10;
            if (secondDigit % 2 === 0) {
                return 'even';
            } else {
                return 'odd';
            }
        } else {
            number = Math.floor(number / 10);
            console.log('numb', number)
        }
    }
}

console.log(">>>>>>>>>>>>>", checkDigit(12345)); // 2 → even
console.log(">>>>>>>>>>>>>", checkDigit(98765)); // 8 → even
console.log(">>>>>>>>>>>>>", checkDigit(456));   // 5 → odd
