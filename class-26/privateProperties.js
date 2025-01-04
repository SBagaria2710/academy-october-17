class Pizza {
  static totalPizzaMade = 0;
  #toppings; // Private Property
  #size; // Private Property
  #crustType; // Private Property
  #consumerName; // Private Property

  constructor(toppings, size, crustType, consumerName) {
    this.#toppings = toppings;
    this.#size = size;
    this.#crustType = crustType;
    this.#consumerName = consumerName;
    Pizza.totalPizzaMade++;
  }

  static calculateTotalPizzaMade() {
    console.log(`Total Pizza made so far = ${Pizza.totalPizzaMade}`);
  }

  describe() {
    console.log(
      `A ${this.#size} pizza with ${this.#toppings.join(", ")} and ${
        this.#crustType
      } crust`
    );
  }
}

let customerOrder1 = new Pizza(
  ["corn", "cheese"],
  "regular",
  "thin",
  "Shashwat"
);
// customerOrder1.describe();
// ------------------- IGNORE ------------------------------
class StuffedCrustPizza extends Pizza {
  constructor(toppings, size, crustType, stuffingType) {
    super(toppings, size, crustType);
    this.stuffingType = stuffingType;
  }

  logProperties() {
    console.log(this);
  }

  describe() {
    console.log(
      `CHILD: A ${this.#size} pizza with ${this.#toppings.join(", ")} and ${
        this.#crustType
      } crust`
    );
  }
}

const instance = new StuffedCrustPizza(
  ["corn", "cheese"],
  "regular",
  "thin",
  "Cheese Burst"
);
instance.describe();
