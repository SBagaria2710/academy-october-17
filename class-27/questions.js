Object.prototype.method = function () {
  console.log("Method on every object");
};

let obj = {};
obj.method(); // Method on every object

let arr = [];
arr.method(); // Method on every object
