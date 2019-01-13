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
//http://localhost:5000/api/comments
router.post("/comments", (req, res) => {
  const comment = new Comment();
  const { text } = req.body;
  if (!text) {
    //we should throw an error, we can do this check on the fron edn
    return res.json({
      success: false,
      error: "You must provide an  comment"
    });
  }
  comment.text = text;
  comment.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});
// @route   UPDATE api/commentbox/comments
// @desc    Update comments
// @access  Public
//http://localhost:5000/api/comments/:commentId

router.post("/comments/:commentId", (req, res) => {
  const commentId = req.params.commentId;
  if (!commentId) {
    return res
      .status(422)
      .json({ success: false, error: "No comment id provided" });
  }
  Comment.findOne({ _id: commentId }, (error, comment) => {
    if (error) return res.json({ success: false, error });
    const text = req.body.text;
    // comment.text = text
    if (text) comment.text = text;
    comment.save(error => {
      if (error) return res.json({ success: false, error });
      Comment.find({}, (err, comment) => {
        if (err) {
          return res.status(401).json({ err: "failed to fetch comment" });
        }
        res.json(comment);
      });
      // return res.json({ success: true });
    });
  });
});

// @route   Delete api/commentbox/comments
// @desc    Delete comments
// @access  Public
//http://localhost:5000/api/comments/:commentId
router.delete("/comments/:commentId", (req, res) => {
  const { commentId } = req.params;
  if (!commentId) {
    return res.json({ success: false, error: "No comment id provided" });
  }
  Comment.remove({ _id: commentId }, (error, comment) => {
    if (error) return res.json({ success: false, error });
    return res.json({ success: true });
  });
});

module.exports = router;
