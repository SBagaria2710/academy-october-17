class MyClass {
  constructor() {
    // Initialisation of properties
  }

  myMethod() {
    // Method Implementation
  }

  myMethod1() {
    // Method Implementation
  }
}

const instance = new MyClass();

// -----------

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = this.firstName + " " + this.lastName;
  }

  greet() {
    console.log(`Hey there! I am ${this.fullName}`);
  }
}

const p1 = new Person("Shashwat", "Bagaria");
const p2 = new Person("Ayush", "Tripathi");

// p1.greet();
// p2.greet();

// ---------

class Pizza {
  constructor(toppings, size, crustType) {
    this.toppings = toppings;
    this.size = size;
    this.crustType = crustType;
  }

  describe() {
    console.log(
      `A ${this.size} pizza with ${this.toppings.join(", ")} and ${
        this.crustType
      } crust`
    );
  }
}

let customerOrder1 = new Pizza(["corn", "cheese"], "regular", "thin");
let customerOrder2 = new Pizza(
  ["paneer", "mushroom", "corn", "cheese"],
  "medium",
  "thin"
);

customerOrder1.describe();
console.log(customerOrder2);
