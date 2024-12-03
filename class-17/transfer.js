// Difference in between JSON and JS Object: Keys must be in double quotes in JSON. No Comments in JSON

let toys = {
  toy1: { name: "Teddy Bear", color: "Brown" },
  toy2: { name: "Race Car", color: "Red" },
  toy3: { name: "Doll", color: "Pink" },
};

// Pack our toys
let toysJSONString = JSON.stringify(toys);
console.log("Packed Toys", toysJSONString); // JSON

// Un-Pack toys
let toysUnPacked = JSON.parse(toysJSONString);
console.log("UnPacked Toys", toysUnPacked); // JavaScript Object
