class Pizza {
  static totalPizzaMade = 0;

  constructor(toppings, size, crustType) {
    this.toppings = toppings;
    this.size = size;
    this.crustType = crustType;
    Pizza.totalPizzaMade++;
  }

  static calculateTotalPizzaMade() {
    console.log(`Total Pizza made so far = ${Pizza.totalPizzaMade}`);
  }

  describe() {
    console.log(
      `A ${this.size} pizza with ${this.toppings.join(", ")} and ${
        this.crustType
      } crust`
    );
  }
}

const p = new Pizza(["corn", "cheese"], "regular", "thin");
Pizza.calculateTotalPizzaMade(); //
