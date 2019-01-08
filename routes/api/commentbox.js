const express = require("express");
const router = express.Router();

// @route   GET api/commentbox/
// @desc    get users
// @access  Public
router.get("/", (req, res) => {
  res.json({ message: "Hello, World !" });
});

module.exports = router;
