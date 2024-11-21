// Boilerplate - Template for creating a promise
let p = new Promise((resolve, reject) => {
  // logic
});

// --------------------
// const hasCleanedRoom = true;
// let myPromise = new Promise(function (res, rej) {
//   if (hasCleanedRoom) {
//     res("Ice Creame");
//   } else {
//     rej("No Ice Creame!");
//   }
// });

// myPromise
//   .then(function (val) {
//     console.log("Success:", val);
//     return new Promise((res, rej) => {
//       rej("Promise Rejected");
//     });
//   })
//   .then(function (val) {
//     console.log(val);
//   })
//   .catch(function (val) {
//     console.log("Failed:", val);
//     return "catch - testing";
//   })
//   .finally(function () {
//     console.log("Accept your fate!");
//   });

// console.log(myPromise);
// -----------
const coinToss = new Promise((resolve, reject) => {
  setTimeout(function () {
    const isHeads = Math.random() > 0.5;

    if (isHeads) resolve("Heads");
    else reject("Tails");
  }, 1000);
});

const onFulfilled = function (result) {
  console.log("Result: ", result);
};

const onRejected = function (result) {
  console.log("Error: ", result);
};

const onFinally = function () {
  console.log("All Done");
};

coinToss.then(onFulfilled).catch(onRejected).finally(onFinally);
