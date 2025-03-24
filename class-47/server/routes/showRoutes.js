const router = require("express").Router();
const Show = require("../models/showModel");

// Add a Show
router.post("/add-show", async (req, res) => {
  try {
    const newShow = new Show(req.body);
    await newShow.save();
    res
      .status(200)
      .json({ success: true, message: "New Show was added successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Get all shows by theatre
router.get("/get-all-shows-by-theatre/:theatreId", async (req, res) => {
  try {
    const shows = await Show.find({ theatre: req.params.theatreId }).populate(
      "movie"
    );
    res.send({
      success: true,
      message: "All shows fetched",
      data: shows,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Get all theatres by movie which has some shows
router.get("/get-all-theatres-by-movie/:movieId/:date", async (req, res) => {
  try {
    const { movieId, date } = req.params;
    const shows = await Show.find({
      movie: movieId,
      date: new Date(date).toISOString(),
    })
      .populate("theatre")
      .sort({ createdAt: 1 });

    let uniqueTheatres = [];
    shows.forEach((show) => {
      let isTheatre = uniqueTheatres.find(
        (theatre) => theatre._id === show.theatre._id
      );
      if (!isTheatre) {
        let showsOfThisTheatre = shows.filter(
          (showObj) => showObj.theatre._id == show.theatre._id
        );
        uniqueTheatres.push({
          ...show.theatre._doc,
          shows: showsOfThisTheatre,
        });
      }
    });

    res.send({
      success: true,
      message: "All Shows fetched",
      data: uniqueTheatres,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Get show by id
router.get("/get-show-by-id/:showId", async (req, res) => {
  try {
    const show = await Show.findById(req.params.showId)
      .populate("movie")
      .populate("theatre");
    res.send({
      success: true,
      message: "All shows fetched",
      data: show,
    });
    console.log(show);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Update a show
router.put("/update-show/:showId", async (req, res) => {
  try {
    const show = await Show.findByIdAndUpdate(req.params.showId, req.body);
    res.send({
      success: true,
      message: "The show has been updated!",
    });
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
});

// Delete a show
router.delete("/delete-show/:showId", async (req, res) => {
  try {
    await Show.findByIdAndDelete(req.params.showId);
    res.send({
      success: true,
      message: "The show has been deleted!",
    });
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;
