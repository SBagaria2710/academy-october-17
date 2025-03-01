const express = require("express");

const app = express();

// Middleware to parse JSON requrest bodies
app.use(express.json());

// Sample user data (In - Memory)
let users = [
  { id: 1, name: "User 1" },
  { id: 2, name: "User 2" },
];

// Define a route
app.get("/", (request, response) => {
  response.send("Hello, Express!");
});

app.get("/about", (request, response) => {
  response.send("This is about page.");
});

app.get("/contact", (request, response) => {
  response.send("This is contact page");
});

app.post("/data", (request, response) => {
  response.send("Received a POST request.");
});

// POST endpoint to add a new user
app.post("/users", (req, res) => {
  const newUser = req.body;

  // Assign a unique id to the new user
  const userId = users.length + 1;
  newUser.id = userId;

  // Add the new user to the list
  users.push(newUser);

  res.status(201).json({ message: "User created", user: newUser });
});

// DELETE endpoint to delete a user by ID
app.delete("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);

  // Find the user index by Id
  const userIndex = users.findIndex((user) => user.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  // Remove the user from the array
  users.splice(userIndex, 1);

  res.json({ message: "User Deleted" });
});

app.get("/all-users", (req, res) => {
  res.json(users);
});

app.post("/testing", (req, res) => {
  console.log(req.body);
  res.json({ message: "Request Received" });
});

const port = 3000;
app.listen(port, () => {
  console.log("Server is running on port: ", port);
});
