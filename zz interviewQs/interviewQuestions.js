

// 1, What will be the output of the following code?

function outer() {
    let result = [];

    for (var i = 0; i < 3; i++) {
        result.push(function () {
            console.log(i);
        });
    }

    return result;
}

const funcs = outer();
funcs[0]();
funcs[1]();
funcs[2]();

//  -----  2  ------------------------------------------------------

// let a = 1;
// function foo() {
//     a = 10;
//     return;
//     function a() { }
// }

// foo();
// console.log(a);

//  -------  3  ----------------------------------------------------

// 3, 

// for (var i = 0; i < 3; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
// }

//  -------  4  ----------------------------------------------------

// var x = 1;

// function test() {
//     console.log(x);
//     var x = 2;
//     console.log(x);
// }

// test();

//  -------  5  ----------------------------------------------------

// let count = 0;

// if (true) {
//     let count = 1;
//     console.log(count);
// }

// console.log(count);

//  -------  6  ----------------------------------------------------

// let a = 10;

// function hello() {
//     console.log(a);
//     let a = 15; 
// }
// hello();

//  -------  7  ----------------------------------------------------

// var a = 5;

// (function () {
//     console.log(a);
//     var a = 10;
// })();

//  -------  8  ----------------------------------------------------






