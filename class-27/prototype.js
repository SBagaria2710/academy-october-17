const person = {
  name: "Shashwat",
  meta: {
    age: 27,
  },
};

// "hasOwnProperty" method in jS is used to check whether an Object has a particular property as a direct property or not.
// console.log(person.hasOwnProperty("name"));
// console.log(person.meta.hasOwnProperty("age"));

// -----

// function Car(model, year) {
//   this.model = model;
//   this.year = year;

//   // Method defined inside the constructor
//   // this.displayInfo = function () {
//   //   return `INSTANCE: This is a ${this.year} ${this.model}`;
//   // };
// }

// Car.prototype.__proto__.displayGenericInfo = function () {
//   return `This car is from ${this.year}`;
// };

// Car.prototype.displayInfo = function () {
//   return `PROTOTYPE: This is a ${this.year} ${this.model}`;
// };

// let car1 = new Car("Toyota Camry", 2022);
// let car2 = new Car("Ford Mustang", 2020);

// console.log([]);

// ---------

// Syntax: Object.create(proto); // "proto" here is the object that should be the prototype of the newly created object.
let carPrototype = {
  displayInfo: function () {
    return `Something ${this.name}`;
  },
};

let car1 = Object.create(carPrototype);
car1.name = "Maruti Suzuki";

console.log(car1.displayInfo());
