// Primitive Data Type
let numOne = 50;
let numTwo = numOne;

numOne = 100;

// console.log(numOne);
// console.log(numTwo);

// -----------------------------

let obj1 = {
  name: "Scaler Academy",
  age: 6,
};

let obj2 = obj1;

obj1.age = 5;

console.log(obj2.age); // 5
