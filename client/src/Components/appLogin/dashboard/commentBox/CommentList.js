import React from "react";
import PropTypes from "prop-types";
import Comment from "./Comment";

const CommentList = ({ data, handleUpdate, handleDelete }) => {
  const commentNodes = data.map(comment => (
    <Comment
      key={comment._id}
      id={comment._id}
      timestamp={comment.updatedAt}
      handleUpdate={handleUpdate}
      handleDelete={handleDelete}
    >
      {comment.text}
    </Comment>
  ));
  return <div>{commentNodes}</div>;
};

CommentList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string
    })
  ),
  handleDeleteComment: PropTypes.func.isRequired
  //  handleUpdateComment: PropTypes.func.isRequired
};

CommentList.defaultProps = {
  data: []
};

export default CommentList;
