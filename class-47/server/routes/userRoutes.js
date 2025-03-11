const router = require("express").Router();
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

// Register a user
router.post("/register", async (req, res) => {
  try {
    const userExists = await User.findOne({ email: req.body.email });

    if (userExists) {
      return res
        .status(400)
        .json({ success: false, message: "User Already Exists" });
    }

    const newUser = new User(req.body);
    await newUser.save();
    res.status(200).json({ success: true, message: "Registration Successful" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User does not exist. Please, register.",
      });
    }

    // Simplified password validation
    if (req.body.password !== user.password) {
      return res.status(401).json({
        success: false,
        message: "Sorry, invalid credentials. Please, try again.",
      });
    }

    const token = jwt.sign({ userId: user._id }, process.env.jwt_secret, {
      expiresIn: "1d",
    });

    res.status(200).json({
      success: true,
      message: "You've successfully logged in!",
      data: token,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
