/* Runs a shell command */
// const { exec } = require("child_process");

// exec("ls -lh", (error, stdout) => {
//   if (error) {
//     console.error(`exec error: ${error}`);
//     return;
//   }
//   console.log(`stdout: ${stdout}`);
// });

// ------------------------

/* Executes an executable file directly. */
// const { execFile } = require("child_process");
// const path = require("path");

// const scriptPath = path.join(__dirname, "script.sh");
// const args = ["arg1", "arg2"];

// execFile(scriptPath, args, (error, stdout, stderr) => {
//   if (error) {
//     console.error(`Execution error: ${error}`);
//     return;
//   }
//   console.log(`stdout: ${stdout}`);
//   console.error(`stderr: ${stderr}`);
// });

// ------------------------

/** Launch new Processes */
// const { spawn } = require("child_process");

// spawn("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", [
//   "https://www.scaler.com/",
//   "--incognito",
// ]);

// ------------------------

/** Event Emitter */
// const eventEmitter = require("events");
// const myEmitter = new eventEmitter();

// // Listeners
// myEmitter.on("scaler", (...args) => {
//   console.log("There is a new event!", args);
// });

// myEmitter.on("academy", () => {
//   console.log("Testing");
// });

// myEmitter.on("testing", (...args) => {
//   console.log("Testing again");
// });

// // Emit an event
// myEmitter.emit("scaler", 1, 2);
// myEmitter.emit("testing", [1, 2, 3]);

// ------------------------

/** Creating basic server and handling different requests */
// const http = require("http");
// const server = http.createServer();

// server.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

// // Adding a request listener
// server.on("request", (req, res) => {
//   console.log("headers", req.headers, "url", req.url, "method", req.method);

//   if (req.method === "GET") {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.write("Hello World");
//     res.end();
//   } else if (req.method === "POST") {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify({ name: "John" }));
//   }
// });

// ------------------------

/** Event Loop */
// console.log("Start");

// setImmediate(() => {
//   console.log("Set Immediate");
// });

// process.nextTick(() => {
//   console.log("Next Tick");
// });

// console.log("End");

// ------------------------

/** Custom Event Listener */
class MyEventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  }

  emit(event, ...args) {
    if (this.events[event]) {
      this.events[event].forEach((listener) => listener(...args));
    }
  }
}

// Example Usage
const myEmitter = new MyEventEmitter();
myEmitter.on("scaler", (...args) => {
  console.log("There is a new event", args);
});
myEmitter.emit("scaler", 1, 2, 3);
