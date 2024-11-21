const fs = require("fs");

const promiseReadFile1 = fs.promises.readFile("./files/f1.txt", "utf-8");
const promiseReadFile2 = fs.promises.readFile("./files/f2.txt", "utf-8");
const promiseReadFile3 = fs.promises.readFile("./files/f3.txt", "utf-8");

const onFulfilled = (data) => {
  console.log("This is file data:", data);
};

const onRejected = (error) => {
  console.log("This is the error:", error);
};

// For File 1
promiseReadFile1.then(onFulfilled).catch(onRejected);

// For File 2
promiseReadFile2.then(onFulfilled).catch(onRejected);

// For File 3
promiseReadFile3.then(onFulfilled).catch(onRejected);
