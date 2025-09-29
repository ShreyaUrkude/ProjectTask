
const express = require("express");
const router = express.Router();

router.post("/verify-otp", (req, res) => {
  const { email, otp } = req.body;
  if (otp === "123456") {
    res.status(200).json({ message: "OTP verified" });
  } else {
    res.status(401).json({ error: "Invalid OTP" });
  }
});

module.exports = router;
