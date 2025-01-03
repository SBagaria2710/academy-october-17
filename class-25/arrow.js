let user = {
  firstName: "Shashwat",
  sayHi: function () {
    console.log("1.", this); // window
    let arrow = () => {
      console.log("2.", this); // window
      let innerArrow = () => {
        console.log("3.", this); // window
      };
      innerArrow();
    };
    arrow();
  },
};
user.sayHi();

// Rules:
// 1. For Global Execution Context "this" will be window/global object.
// 2. For Execution context created with method call (calling with object), "this keyword" will be that object.
// 3. For Execution context created with a function call (calling without object), "this keyword" will be window/global object.
