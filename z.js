

(function () {
    var a;          // declaration hoisted
    console.log(a); // a is undefined at this point
    a = 10;         // value assigned later
})();



