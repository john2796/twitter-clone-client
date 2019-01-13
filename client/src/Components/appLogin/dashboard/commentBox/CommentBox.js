import React, { Component } from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import "./CommentBox.css";
import { connect } from "react-redux";
import {
  loadCommentsFromServer,
  submitNewComment,
  onDeleteComment,
  onUpdateComment,
  submitUpdatedComment
} from "../../../../store/actions/commentBoxActions";

class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };
    this.pollInterval = null;
  }

  componentDidMount() {
    this.props.loadCommentsFromServer();
    // if (!this.pollInterval) {
    //   this.pollInterval = setInterval(this.props.loadCommentsFromServer, 2000);
    // }
  }
  componentWillUpdate(nextProps, nextState) {}
  componentWillUnmount() {
    if (this.pollInterval) clearInterval(this.pollInterval);
    this.pollInterval = null;
  }

  onChangeText = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitComment = e => {
    e.preventDefault();
    const { data } = this.props.comment;
    const { text, updatedId } = this.state;
    if (!text) return;
    if (updatedId) {
      this.props.submitUpdatedComment(this.props.comment.text, updatedId);
    } else {
      this.props.submitNewComment(text, data);
    }
    this.setState({ text: "" });
  };

  handleDelete = id => {
    const idx = id;
    this.props.onDeleteComment(idx, this.props.comment.data);
    console.log("deleted");
  };

  handleUpdates = id => {
    const { data } = this.props.comment;
    this.props.onUpdateComment(id, data);
  };

  handleUpdate = id => {
    fetch(`http://localhost:5000/api/comments/${id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(data => console.log(data));
    // const { data } = this.props.comment;
    // const oldComment = data.find(c => c._id === id);
    // if (!oldComment) return;
    // this.setState({
    //   author: oldComment.author,
    //   text: oldComment.text,
    // });
  };

  render() {
    const { data, error, fetchingComments } = this.props.comment;
    const { isComment } = this.props.footer;
    const { text } = this.state;
    const testing = true;

    let comments;
    if (!testing) {
      return (comments = (
        <img
          src="http://www.hemispheresud.com/wp-content/uploads/AAPL/loaders/Teddy%20Bear%20Loading.gif"
          alt="loading"
          style={{
            width: "100%",
            margin: "0 auto"
          }}
        />
      ));
    } else {
      return (comments = (
        <div
          className="container"
          style={isComment ? { display: "none" } : { display: "block" }}
        >
          <div className="comments">
            <CommentList
              data={data}
              handleDelete={this.handleDelete}
              handleUpdate={this.handleUpdate}
            />
          </div>
          <div className="form">
            <CommentForm
              text={text}
              handleChangeText={this.onChangeText}
              handleSubmit={this.submitComment}
            />
          </div>
          {error && <p>{error}</p>}
        </div>
      ));
    }
    return <div>{comments}</div>;
  }
}

const mapStateToProps = state => ({
  footer: state.footer,
  comment: state.comments
});

export default connect(
  mapStateToProps,
  {
    loadCommentsFromServer,
    submitNewComment,
    onDeleteComment,
    onUpdateComment,
    submitUpdatedComment
  }
)(CommentBox);
