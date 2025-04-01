const express = require("express");
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("A user connected", socket.id);

  // Send a message from server to the client
  socket.emit("message", "Welcome to the WebSocket Server!");

  // Handle incoming messaged from clients
  socket.on("client_msg", (msg) => {
    console.log("Message from client:", msg);
    // Broadcast the message to all connected clients
    io.emit("server_msg", msg);
  });

  // Handle Disconnection
  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

// app.get("/", (req, res) => {
//   res.send("Hello, World!");
// });

server.listen(3000, () => console.log("App running at http://localhost:3000"));

const publicPath = path.join(__dirname, "public");
app.use(express.static(publicPath));
app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});
