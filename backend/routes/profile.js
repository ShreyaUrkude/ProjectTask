
const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/save", async (req, res) => {
  const { email, username, about } = req.body;

  try {
    await db.query(
      "INSERT INTO users (email, username, about) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE username = ?, about = ?",
      [email, username, about, username, about]
    );
    res.status(200).json({ message: "Profile saved" });
  } catch (err) {
    console.error("Profile error:", err);
    res.status(500).json({ error: "Database error" });
  }
});

module.exports = router;
