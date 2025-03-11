const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();
require("./config/db");

const userRoutes = require("./routes/userRoutes");

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(3001, () => {
  console.log("Server is running");
});
