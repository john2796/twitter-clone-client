import React, { Component } from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import "./CommentBox.css";
import { connect } from "react-redux";
import {
  loadCommentsFromServer,
  submitNewComment
} from "../../../../store/actions/commentBoxActions";

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.pollInterval = null;

    this.state = {
      text: ""
    };
  }

  componentDidMount() {
    //this.setState({ isLoading: true });
    this.props.loadCommentsFromServer();

    // if (!this.pollInterval) {
    //   this.pollInterval = setInterval(this.loadCommentsFromServer, 2000);
    // }
  }
  // componentWillMount() {
  //   if (this.pollInterval) clearInterval(this.pollInterval);
  //   this.pollInterval = null;
  // }

  onChangeText = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitComment = e => {
    e.preventDefault();
    const { submitNewComment } = this.props;
    const { updateId, data } = this.props.comment;

    // if (!text) return;
    // if (updateId) {
    //   this.submitUpdatedComment();
    // } else {
    //   this.submitNewComment();
    // }
  };

  render() {
    const { data, text, error, fetchingComments } = this.props.comment;
    const { isComment } = this.props.footer;

    let comments;
    if (fetchingComments) {
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
              handleDeleteComment={this.onDeleteComment}
              handleUpdateComment={this.onUpdateComment}
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
    submitNewComment
  }
)(CommentBox);
