// Function Definition
function serveBeverage(quantity, drink) {
  console.log(`I want ${quantity} ${drink}`); // Template Literals
}

// const serveBeverage = (quantity, drink) => {
//   console.log(`I want ${quantity} ${drink}`); // Template Literals
// };

// const serveBeverage = function (quantity, drink) {
//   console.log(`I want ${quantity} ${drink}`); // Template Literals
// };

// Function Execution
serveBeverage(2, "coffee");

// -------
/**
 * Functions are called First-Class citizens in JavaScript
 * 1. Functions can be assigned to variables.
 * 2. Functions can be passed as arguments to other functions.
 * 3. Functions can be returned from another functions.
 */

function foo() {
  console.log("I am foo");
}

function bar(func) {
  func(); // I am foo
  return function () {
    console.log("I am a returned function");
  };
}

const baz = bar(foo);
baz(); // I am a returned function
