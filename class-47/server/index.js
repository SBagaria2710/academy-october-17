const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();
require("./config/db");

const userRoutes = require("./routes/userRoutes");
const movieRoutes = require("./routes/movieRoute");
const theatreRoutes = require("./routes/theatreRoute");

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/movies", movieRoutes);
app.use("/api/theatres", theatreRoutes);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(3001, () => {
  console.log("Server is running");
});
