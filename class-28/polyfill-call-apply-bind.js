let car = {
  name: "Mercedes",
  color: "white",
};

function buyCar(price) {
  console.log(`I bought a ${this.color} ${this.name} for ${price}`);
}

// ---------- CALL ------------
Function.prototype.myCall = function (newContext = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "is not an executable");
  }

  // Get your function
  const functionToBeInvoked = this;

  // Assign the function to the context object
  newContext.tempFunction = functionToBeInvoked;

  // Invoke the function
  let result = newContext.tempFunction(...args);

  // Delete the temporary function from the object
  delete newContext.tempFunction;

  return result;
};

// buyCar.call(car, "$1000");
// buyCar.myCall(car, "$1000");

// -------- APPLY ------------
Function.prototype.myApply = function (newContext = {}, args) {
  if (typeof this !== "function") {
    throw new Error(this + "is not an executable");
  }

  if (!Array.isArray(args)) {
    throw new Error(args + "needs to be an array");
  }

  // Get your function
  const functionToBeInvoked = this; // buyCar

  // Assign the function to the context object
  newContext.tempFunction = functionToBeInvoked;

  // Invoke the function
  let result = newContext.tempFunction(...args);

  // Delete the temporary function from the object
  delete newContext.tempFunction;

  return result;
};

// buyCar.apply(car, ["$1000"]);
// buyCar.myApply(car, ["$1000"]);

// -------- BIND ------------
Function.prototype.myBind = function (newContext = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "is not an executable");
  }

  const functionToBeInvoked = this;

  return function (...secondaryArgs) {
    functionToBeInvoked.myApply(newContext, [...args, ...secondaryArgs]);
  };
};

const foo = buyCar.myBind(car, "$1000");
foo();
