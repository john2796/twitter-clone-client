const express = require("express");
const router = express.Router();

const Comment = require("../../models/Comment");

// @route   GET api/commentbox/comments
// @desc    get users
// @access  Public
//http://localhost:5000/api/comments
router.get("/comments", (req, res) => {
  Comment.find((err, comments) => {
    if (err) res.json({ success: false, error: err });
    return res.json({ success: true, data: comments });
  });
});

// @route   POST api/commentbox/comments
// @desc    Post comments
// @access  Public
router.post("/comments", (req, res) => {
  const comment = new Comment();
  const { author, text } = req.body;
  if (!author || !text) {
    //we should throw an error, we can do this check on the fron edn
    return res.json({
      success: false,
      error: "You must provide an author and comment"
    });
  }
  comment.author = author;
  comment.text = text;
  comment.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

module.exports = router;
