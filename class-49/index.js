const path = require("path");
const fs = require("fs");
const http = require("http");
const server = http.createServer();

// server.listen(3000, () => {
//   console.log("Server started at 3000");
// });

// server.on("request", (req, res) => {
//   fs.readFile("./content.txt", (err, data) => {
//     if (err) throw err;
//     res.end(data);
//   });
// });

/* ---------------------------------- */
