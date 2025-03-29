const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const authMiddleware = require("../middlewares/authMiddleware");
const EmailHelper = require("../util/EmailHelper");

function otpGenerator() {
  return Math.floor(Math.random() * 10000 + 90000);
}

// Register a user
router.post("/register", async (req, res) => {
  try {
    const userExists = await User.findOne({ email: req.body.email });

    if (userExists) {
      return res
        .status(400)
        .json({ success: false, message: "User Already Exists" });
    }

    // Hash the password before storing in DB
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;

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

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) {
      response.status(401).send({
        success: false,
        message: "Invalid Credentials",
      });
      return;
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

router.get("/get-current-user", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.body.userId).select("-password");
    res.send({
      success: true,
      message: "User details fetched successfully!",
      data: user,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

router.patch("/forgotpassword", async (req, res) => {
  try {
    /**
     * 1. Extract email from req
     * 2. Check if mail is present in DB or not
     *  2.1: If email is not present -> send a response to the user (user not found)
     * 3. if email is present -> create basic otp using otpGenerator function and send to the email
     * 4. Also, store the otp -> in the userModel
     */
    if (req.body.email === undefined) {
      return res.status(401).json({
        status: "failure",
        message: "Please, enter the email for forgot password",
      });
    }

    let user = await User.findOne({ email: req.body.email });
    if (user === null) {
      return res.status(404).json({
        status: "failure",
        message: `user not found for ${req.body.email}`,
      });
    }

    const otp = otpGenerator();
    user.otp = otp;
    user.otpExpiry = Date.now() + 10 * 60 * 1000; // Now + 10 minutes
    await user.save();

    res.status(200).json({
      status: "success",
      message: `OTP sent to the email: ${req.body.email}`,
    });

    // Send the mail to there mailId
    await EmailHelper("otp.html", user.email, { name: user.name, otp: otp });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

router.patch("/resetpassword", async function (req, res) {
  // -> otp
  // -> newPassword

  try {
    let resetDetails = req.body;
    if (!resetDetails.password || !resetDetails.otp) {
      return res.status(401).json({
        status: "failure",
        message: "Invalid req",
      });
    }

    const user = await User.findOne({ otp: resetDetails.otp });
    if (user === null) {
      return res.status(404).json({
        status: "failure",
        message: "User not found",
      });
    }

    if (Date.now() > user.otpExpiry) {
      return res.status(401).json({
        status: "failure",
        message: "OTP expired",
      });
    }

    user.password = req.body.password;
    user.otp = undefined;
    user.otpExpiry = undefined;

    await user.save();

    res
      .status(200)
      .json({ status: "success", message: "Password reset was successful" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
