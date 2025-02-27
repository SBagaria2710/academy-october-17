const fs = require("fs");

// fs.readFile("example1.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

// const content = "Hello, World!";
// fs.writeFile("example1.txt", content, "utf8", (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log("File has been written!");
// });

// fs.rename("test.txt", "./dest/test.txt", (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log("File has been renamed!");
// });

// fs.unlink("test-copy.txt", (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log("File has been deleted!");
// });

// fs.stat("test.txt", (err, stats) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log("File size: ", stats.size);
//   console.log("Is Directory: ", stats.isDirectory());
// });

const directoryName = "my-directory";
// fs.mkdir(directoryName, (err) => {
//   if (err) {
//     console.error(`Error creating directory: ${err}`);
//     return;
//   }
//   console.log(`Directory ${directoryName} created successfully`);
// });

// fs.rm(directoryName, { recursive: true }, (err) => {
//   if (err) {
//     console.error(`Error deleting directory: ${err}`);
//     return;
//   }
//   console.log(`Directory ${directoryName} deleted successfully`);
// });

// const directoryPath = "source";
// if (fs.existsSync(directoryPath)) {
//   console.log("Exists");
// } else {
//   console.log("Not exists");
// }
