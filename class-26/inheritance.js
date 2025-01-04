class Pizza {
  constructor(toppings, size, crustType) {
    this.toppings = toppings;
    this.size = size;
    this.crustType = crustType;
  }

  describe() {
    console.log(
      `PARENT: A ${this.size} pizza with ${this.toppings.join(", ")} and ${
        this.crustType
      } crust`
    );
  }
}

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
      `CHILD: A ${this.size} pizza with ${this.toppings.join(", ")} and ${
        this.crustType
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
