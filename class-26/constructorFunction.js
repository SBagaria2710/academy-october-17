function Pizza(toppings, size, crustType) {
  this.toppings = toppings;
  this.size = size;
  this.crustType = crustType;

  this.describe = function () {
    console.log(
      `A ${this.size} pizza with ${this.toppings.join(", ")} and ${
        this.crustType
      } crust`
    );
  };
}

let customerOrder1 = new Pizza(["corn", "cheese"], "regular", "thin");
let customerOrder2 = new Pizza(
  ["paneer", "mushroom", "corn", "cheese"],
  "medium",
  "thin"
);

console.log(customerOrder1);
console.log(customerOrder2);
