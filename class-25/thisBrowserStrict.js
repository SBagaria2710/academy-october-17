"use strict";

// Scenario 1
// console.log(this); // Window

// Scenario 2
// function foo() {
//   console.log(this); // undefined
// }
// foo();

// Scenario 3
// let obj = {
//   firstName: "Shashwat",
//   foo: function () {
//     console.log(this); // obj
//   },
// };
// obj.foo();

// Scenario 4
// let obj2 = {
//   firstName: "Shashwat",
//   foo: function () {
//     console.log("Outside:", this); // obj2
//     function bar() {
//       console.log("Inside", this); // undefined
//     }
//     bar();
//   },
// };
// obj2.foo();
