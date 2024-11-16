// Create a one(). A function that will call the passed function "atmost" one time.

function printName() {
  return "Scaler Academy";
}

function one(fn) {
  let count = 0;
  return function () {
    if (count > 0) {
      return "Already Invoked Once";
    } else {
      count++;
      return fn();
    }
  };
}

const returnedFn = one(printName);
console.log(returnedFn()); // "Scaler Academy"
console.log(returnedFn()); // "Already invoked once"
console.log(returnedFn()); // "Already invoked once"
console.log(returnedFn()); // "Already invoked once"
console.log(returnedFn()); // "Already invoked once"
console.log(returnedFn()); // "Already invoked once"
console.log(returnedFn()); // "Already invoked once"
