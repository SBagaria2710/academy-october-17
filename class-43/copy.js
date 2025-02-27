const fs = require("fs");

// fs.rename("./source/file.txt", "./dest/file1.txt", (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
// });

const sourceFilePath = "./source/file.txt";
const destinationFilePath = "./dest/file.txt";

// Create a readable stream from the source file
const readStream = fs.createReadStream(sourceFilePath);

// Create a writable stream to the destination file
const writeStream = fs.createWriteStream(destinationFilePath);

// Pipe the data from the source file to the destination file
readStream.pipe(writeStream);

readStream.on("error", (err) => {
  console.error(`Error reading the source file: ${err}`);
});

writeStream.on("error", (err) => {
  console.error(`Error writing the destination file: ${err}`);
});

writeStream.on("finish", () => {
  fs.unlink(sourceFilePath, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("File copied successfully");
  });
});
