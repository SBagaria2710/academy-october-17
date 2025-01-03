"use strict";

// Scenario 1
// console.log(this); // {}

// Scenario 2
// function foo() {
//   console.log(this); // undefined
// }
// foo();

// Scenario 3
// let obj = {
//   firstName: "Shashwat",
//   foo: function () {
//     console.log(this);
//   },
// };

// obj.foo(); // obj

// Scenario 4
// let obj2 = {
//   firstName: "Shashwat",
//   foo: function () {
//     console.log("Outside:", this); // obj
//     function bar() {
//       console.log("Inside", this); // undefined
//     }
//     bar();
//   },
// };
// obj2.foo();
