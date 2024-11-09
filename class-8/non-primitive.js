// They are basically reference types in JavaScript

// FUNCTIONS
// What are functions?
// Functions are a block of code that can be called/executed by name. They can accept parameters and return values;

// Function Declaration
// function greet(greeting) {
//   console.log(`Good ${greeting}!`); // ??
// }

const greet = (greeting) => {
  console.log(`Good ${greeting}!`); // ??
};

// Function Execution
// greet();

// ---- ARRAYS
// It is a data structure to store multiple values in a single variable.
// The elements are stored in the form of an index.

let arr = [
  1,
  "scaler",
  true,
  undefined,
  null,
  [1, 2, 3, [[[], null]]],
  function (greeting) {
    console.log(`Good ${greeting}`);
  },
]; // Arrays start from 0
// console.log(arr[5][3][0][1]);

arr[6]("Evening");

arr.push("Academy");
arr.pop(); // "Academy" was popped

// console.log(arr);

// OBJECT
// Objects are basically a data structure where data is stored in key-value pairs

let user = new Object();
let anotherUser = {};
// console.log(user, anotherUser);

let person = {
  name: "Shashwat",
  phone: 123456,
  test: [
    [
      {
        foo: [
          "bar",
          {
            finalKey: "baz",
          },
        ],
      },
    ],
  ],
  foo: function (greeting) {
    console.log(`Good ${greeting}`);
  },
};

console.log(person["test"][0][0].foo[1].finalKey);
console.log(person.foo("Morning"));
