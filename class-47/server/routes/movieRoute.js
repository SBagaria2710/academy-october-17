const router = require("express").Router();
const Movie = require("../models/movieModel");

// Add a movie
router.post("/add-movie", async (req, res) => {
  try {
    const newMovie = new Movie(req.body);
    await newMovie.save();
    res
      .status(200)
      .json({ success: true, message: "New movie was added successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
