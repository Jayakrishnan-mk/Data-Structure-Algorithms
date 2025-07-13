



let a = 1;

function foo() {
    a = 10;
    return a;
    function a() { }
}

console.log(foo());
console.log(a);

