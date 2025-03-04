const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://shashwatbagaria5:5LQE4DE9F0vDDoGJ@cluster0.wytzk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  {}
);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Connection to MongoDB is successful");
});
