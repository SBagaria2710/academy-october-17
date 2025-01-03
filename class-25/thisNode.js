// Rules:
// 1. For Global Execution Context "this" will be window/global object.
// 2. For Execution context created with method call (calling with object), "this keyword" will be that object.
// 3. For Execution context created with a function call (calling without object), "this keyword" will be window/global object.

// Scenario 1
module.exports.firstName = "Shashwat";
console.log(this); // {}

// Scenario 2
// function foo() {
//   console.log(this); // Global Object
// }
// foo();

// Scenario 3
// let obj = {
//   firstName: "Shashwat",
//   foo: function () {
//     console.log(this);
//   },
// };

// obj.foo(); // ??

// Scenario 4
// let obj2 = {
//   firstName: "Shashwat",
//   foo: function () {
//     console.log("Outside:", this); // Obj 2
//     function bar() {
//       console.log("Inside", this); // Global Object
//     }
//     bar();
//   },
// };
// obj2.foo();

// Rules:
// 1. For Global Execution Context "this" will be window/global object.
// 2. For Execution context created with method call (calling with object), "this keyword" will be that object.
// 3. For Execution context created with a function call (calling without object), "this keyword" will be window/global object.
