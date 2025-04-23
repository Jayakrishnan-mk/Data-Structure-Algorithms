
// polymorphism - method overloading concept:

function add(...args) {
    if (!args.length) return 0;
    if (args.length === 1 && Array.isArray(args[0])) {
        return typeof args[0][0] === 'string' ?
            args[0].reduce((sum, val) => sum + val, '') :
            args[0].reduce((sum, val) => sum + val, 0)
    }

    return typeof args[0][0] === 'string' ?
        args.reduce((sum, val) => sum + val, '') :
        args.reduce((sum, val) => sum + val, 0)
}

console.log(add(2, 3));               // ➝ 5
console.log(add(1, 2, 3, 4));         // ➝ 10
console.log(add([5, 10, 15]));        // ➝ 30
console.log(add());                   // ➝ 0
console.log(add('hi', 'there'));      // ➝ "hithere"
console.log(add(['hello', 'world'])); // ➝ "helloworld"