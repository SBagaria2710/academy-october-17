const fs = require("fs");

console.log("Before");

const p = fs.promises.readFile("./files/f1.txt", "utf-8");

function cb1(data) {
  console.log("This is File 1 data => ", data);
  return fs.promises.readFile("./files/f2.txt", "utf-8");
}

function cb2(data) {
  console.log("This is File 2 data => ", data);
  return fs.promises.readFile("./files/f3.txt", "utf-8");
}

function cb3(data) {
  console.log("This is File 3 data => ", data);
}

p.then(cb1)
  .then(cb2)
  .then(cb3)
  .catch(function (err) {
    console.error("Something went wrong");
  });

console.log("After");
