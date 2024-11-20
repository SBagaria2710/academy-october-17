// Boilerplate - Template for creating a promise
let p = new Promise(function (res, rej) {
  // Executor function
});

// --------------------------------
// let myPromise = new Promise(function (resolve, reject) {
//   const hasCleanedRoom = true;

//   if (hasCleanedRoom) resolve("Ice Cream");
//   else reject("No Ice Cream");
// });

// // If the kid was able to clean the room, THEN we will go to get ice cream.

// myPromise.then(function (data) {
//   console.log("Success: " + data);
// });

// myPromise
//   .catch(function (data) {
//     console.log("Failure: " + data);
//   })
//   .then(function () {
//     console.log("Always runs");
//   });

// --------------------------------

const coinToss = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // Simulate the coin toss
    const isHeads = Math.random() > 0.5;

    if (isHeads) resolve("Heads");
    else reject("Tails");
  }, 1000);
});

const onFulfilled = function (result) {
  console.log("Result: " + result);
};

const onRejected = function (error) {
  console.error("Error: " + error);
};

const onFinally = function (error) {
  console.log("All Done!");
};

coinToss.then(onFulfilled).catch(onRejected).finally(onFinally);
