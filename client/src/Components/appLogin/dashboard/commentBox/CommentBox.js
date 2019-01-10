import React, { Component } from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import "./CommentBox.css";
import { connect } from "react-redux";
import { loadCommentsFromServer } from "../../../../store/actions/commentBoxActions";

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.pollInterval = null;
  }

  componentDidMount() {
    //this.setState({ isLoading: true });
    this.props.loadCommentsFromServer();

    // if (!this.pollInterval) {
    //   this.pollInterval = setInterval(this.loadCommentsFromServer, 2000);
    // }
  }
  componentWillMount() {
    if (this.pollInterval) clearInterval(this.pollInterval);
    this.pollInterval = null;
  }

  // onChangeText = e => {
  //   const newState = { ...this.state };
  //   newState[e.target.name] = e.target.value;
  //   this.setState(newState);
  // };

  // submitComment = e => {
  //   e.preventDefault();
  //   const { text, updateId } = this.state;
  //   if (!text) return;
  //   if (updateId) {
  //     this.submitUpdatedComment();
  //   } else {
  //     this.submitNewComment();
  //   }
  // };

  render() {
    const { data, text, error, isLoading } = this.props.comment;
    const { isComment } = this.props.footer;

    let comments;
    if (isLoading) {
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
    loadCommentsFromServer
  }
)(CommentBox);
