const person1 = {
  name: "Shashwat",
  age: 28,
  printNameAndAge: function (...args) {
    console.log(`${this.name}. I live in ${args[0]}`);
  },
};

const person2 = {
  name: "Tony Stark",
  age: 44,
};

person1.printNameAndAge("Bangalore");
person1.printNameAndAge.call(person2, "Mumbai", [], {}, 123423);
person1.printNameAndAge.apply(person2, ["Mumbai", [], {}, 123423]);
const foo = person1.printNameAndAge.bind(person2, "Mumbai");
foo();
