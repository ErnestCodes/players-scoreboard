const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const pool = require("../../config/db");

router.post("/api/scoreboard", (req, res) => {
  try {
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
