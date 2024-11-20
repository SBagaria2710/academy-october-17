const fs = require("fs");

const onFulfilled = function (data) {
  console.log("This is the file data:", data);
};

const onRejected = function (err) {
  console.log("This is the error:", err);
};

let promisedReadFile1 = fs.promises.readFile("./files/f1.txt", "utf-8");
let promisedReadFile2 = fs.promises.readFile("./files/f2.txt", "utf-8");
let promisedReadFile3 = fs.promises.readFile("./files/f3.txt", "utf-8");

// For File 1
promisedReadFile1.then(onFulfilled).catch(onRejected);

// For File 2
promisedReadFile2.then(onFulfilled).catch(onRejected);

// For File 3
promisedReadFile3.then(onFulfilled).catch(onRejected);
