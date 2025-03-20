const router = require("express").Router();
const Theatre = require("../models/theatreModel");

// Add a movie
router.post("/add-theatre", async (req, res) => {
  try {
    const newTheatre = new Theatre(req.body);
    await newTheatre.save();
    res
      .status(200)
      .json({ success: true, message: "New theatre was added successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Get all the theatres for admin
router.get("/get-all-theatres", async (req, res) => {
  try {
    const allTheatres = await Theatre.find()
      .populate("owner")
      .select("-password");
    res.send({
      success: true,
      message: "All theatres have been fetched!",
      data: allTheatres,
    });
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
});

// Get all the theatres individual partners
router.get("/get-all-theatres/:ownerId", async (req, res) => {
  try {
    const allTheatres = await Theatre.find({ owner: req.params.ownerId });
    res.send({
      success: true,
      message: "All theatres have been fetched!",
      data: allTheatres,
    });
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
});

// Update a movie
router.put("/update-theatre/:theatreId", async (req, res) => {
  try {
    const theatre = await Theatre.findByIdAndUpdate(
      req.params.theatreId,
      req.body
    );
    res.send({
      success: true,
      message: "The theatre has been updated!",
      data: theatre,
    });
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
});

// Delete a movie
router.delete("/delete-theatre/:theatreId", async (req, res) => {
  try {
    await Theatre.findByIdAndDelete(req.params.theatreId);
    res.send({
      success: true,
      message: "The theatre has been deleted!",
    });
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;
