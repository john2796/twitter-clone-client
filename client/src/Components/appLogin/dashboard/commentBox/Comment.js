import React from "react";
import moment from "moment";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const TextContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
`;

const Comment = ({
  commentId,
  handleDelete,
  handleUpdates,
  timestamp,
  children
}) => (
  <div
    className="singleComment"
    style={{
      maxWidth: "500px",
      margin: "20px auto",
      borderBottom: "1px solid #E6E5E6"
    }}
  >
    <TextContent className="textContent">
      <img
        alt="user_image"
        className="userImage"
        src={`https://picsum.photos/70?random=${commentId}`}
        style={{
          borderRadius: "50%",
          width: "30px",
          marginRight: "10px"
        }}
      />
      <div className="singleCommentButtons">
        <span className="time">{moment(timestamp).fromNow()}</span>
        <a
          onClick={() => {
            handleUpdates(commentId);
          }}
          style={{
            margin: "0 20px"
          }}
          alt="update comment"
        >
          update
        </a>
        <a
          alt="delete comment"
          onClick={() => {
            handleDelete(commentId);
          }}
        >
          delete
        </a>
      </div>
    </TextContent>
    <div className="singleCommentContent">
      <ReactMarkdown source={children} />
    </div>
  </div>
);

Comment.propTypes = {
  children: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
  //handleUpdateComment: PropTypes.func.isRequired,
  //handleDeleteComment: PropTypes.func.isRequired
};

export default Comment;
