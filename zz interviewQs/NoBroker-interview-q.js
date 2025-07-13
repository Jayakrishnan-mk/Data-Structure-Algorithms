

// NoBroker interview questions:
// -----------------------------

// 1, What will be the output of this?:

// Promise.resolve(1)
//   .then(x => x + 1)
//   .then(x => { throw new Error('Oops') })
//   .catch(() => 3)
//   .then(x => x + 1)
//   .then(console.log);

//  -----------------------------------------------------------

// 2, What will be the output of this?:

console.log("Start");

Promise.resolve().then(() => {
  console.log("promise 1");
});

setTimeout(() => {
  console.log("timeout 1");

  Promise.resolve().then(() => {
    console.log("promise 2 (inside timeout)");
  });

  setImmediate(() => {
    console.log("immediate 1 (inside timeout)");
  });

  process.nextTick(() => {
    console.log("nextTick (inside timeout)");
  });
}, 0);

console.log("End");

