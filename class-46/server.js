const express = require("express");
const productRoutes = require("./routes/productRoutes");

require("./config/db");

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

app.use("/api", productRoutes);

// Define a route
app.get("/", (request, response) => {
  response.send("Hello, Express!");
});

const port = 3000;
app.listen(port, () => {
  console.log("Server is running on port: ", port);
});
