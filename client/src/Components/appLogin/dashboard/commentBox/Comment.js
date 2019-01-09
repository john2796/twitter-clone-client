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

const Comment = props => (
  <div
    className="singleComment"
    style={{ maxWidth: "500px", margin: "0 auto" }}
  >
    <TextContent className="textContent">
      <img
        alt="user_image"
        className="userImage"
        src={`https://picsum.photos/70?random=${props.id}`}
        style={{
          borderRadius: "50%",
          width: "30px",
          marginRight: "10px"
        }}
      />
      <div className="singleCommentButtons">
        <span className="time">{moment(props.timestamp).fromNow()}</span>
        <a
          onClick={() => {
            props.handleUpdateComment(props.id);
          }}
          style={{
            margin: "0 20px"
          }}
        >
          update
        </a>
        <a
          onClick={() => {
            props.handleDeleteComment(props.id);
          }}
        >
          delete
        </a>
      </div>
    </TextContent>
    <div className="singleCommentContent">
      <ReactMarkdown source={props.children} />
    </div>
  </div>
);

Comment.propTypes = {
  author: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleUpdateComment: PropTypes.func.isRequired,
  handleDeleteComment: PropTypes.func.isRequired,
  timestamp: PropTypes.string.isRequired
};

export default Comment;
