// console.log("Start");

// function sayHello() {
//   console.log("Hello");
// }

// sayHello();

// console.log("End");

// Eg: 1

console.log("Start");

function sayHello(arg1) {
  console.log("hello", arg1);
}

setTimeout(sayHello, 1001, "world - 1001");
setTimeout(sayHello, 0, "world - 0");
setTimeout(sayHello, 1000, "world - 1000");

console.log("End");
