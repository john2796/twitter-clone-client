// CommentForm.js
import React from "react";
import PropTypes from "prop-types";

const CommentForm = props => (
  <form
    onSubmit={props.handleSubmit}
    style={{
      maxWidth: "500px",
      margin: "0 auto"
    }}
  >
    <input
      type="text"
      name="text"
      placeholder="Write a comment..."
      value={props.text}
      onChange={props.handleChangeText}
    />
    <button type="submit">Submit</button>
  </form>
);

CommentForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChangeText: PropTypes.func.isRequired,
  text: PropTypes.string
};

CommentForm.defaultProps = {
  text: ""
};

export default CommentForm;
