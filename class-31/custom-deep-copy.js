const originalObj = {
  name: "Alice",
  details: {
    age: 30,
    hobbies: ["Reading", "Cycling"],
  },
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

function deepCopy(value) {
  // Base Case - to handle primitive data types
  if (value === null || typeof value != "object") {
    return value;
  }

  // Handle Array
  if (Array.isArray(value)) {
    let copy = [];
    for (let i = 0; i < value.length; i++) {
      copy[i] = deepCopy(value[i]);
    }

    return copy;
  }

  // Handle Functions
  if (value instanceof Function) {
    return value.bind({});
  }

  // Handle Objects
  if (value instanceof Object) {
    let copy = {};
    for (let property in value) {
      copy[property] = deepCopy(value[property]);
    }
    return copy;
  }

  throw new Error("Unable to copy object");
}

const clonedObj = deepCopy(originalObj);

// Modifications
clonedObj.name = "Shashwat";
clonedObj.details.age = 28;

// Test the method
clonedObj.greet();

console.log("ORIGINAL:", originalObj);
console.log("CLONED:", clonedObj);
