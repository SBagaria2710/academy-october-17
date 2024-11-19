const fs = require("fs");
// Read File Sync (Blocking)
// console.log("Before");

// let data1 = fs.readFileSync("./files/f1.txt", "utf-8");
// let data2 = fs.readFileSync("./files/f2.txt", "utf-8");
// let data3 = fs.readFileSync("./files/f3.txt", "utf-8");

// console.log(data1);
// console.log(data2);
// console.log(data3);

// console.log("Read successful!", data1);

// console.log("After");

// Read File Sycnc (Non-Blocking)
console.log("Start");

// fs.readFile("./files/f1.txt", "utf-8", function (err, data) {
//   if (err) {
//     console.log("Error =>", err);
//     return;
//   }

//   console.log(data);
// });

// fs.readFile("./files/f2.txt", "utf-8", function (err, data) {
//   if (err) {
//     console.log("Error =>", err);
//     return;
//   }

//   console.log(data);
// });

// fs.readFile("./files/f3.txt", "utf-8", function (err, data) {
//   if (err) {
//     console.log("Error =>", err);
//     return;
//   }

//   console.log(data);
// });

// F1 Read Operation
fs.readFile("./files/f1.txt", "utf-8", function (err, data) {
  if (err) {
    console.log("Error =>", err);
    return;
  }

  console.log(data);

  // F2 Read Operation
  fs.readFile("./files/f2.txt", "utf-8", function (err, data) {
    if (err) {
      console.log("Error =>", err);
      return;
    }

    console.log(data);

    // F3 Read Operation
    fs.readFile("./files/f3.txt", "utf-8", function (err, data) {
      if (err) {
        console.log("Error =>", err);
        return;
      }

      console.log(data);
    });
  });
});

console.log("end");
