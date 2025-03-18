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

// Get all the movies
router.get("/get-all-movies", async (req, res) => {
  try {
    const allMovies = await Movie.find();
    res.send({
      success: true,
      message: "All movies have been fetched!",
      data: allMovies,
    });
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
});

// Update a movie
router.put("/update-movie/:movieId", async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.movieId, req.body);
    res.send({
      success: true,
      message: "The movie has been updated!",
      data: movie,
    });
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
});

// Delete a movie
router.delete("/delete-movie/:movieId", async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.params.movieId);
    res.send({
      success: true,
      message: "The movie has been deleted!",
    });
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;
