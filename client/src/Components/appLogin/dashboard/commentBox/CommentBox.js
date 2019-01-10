import React, { Component } from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import "./CommentBox.css";
import { connect } from "react-redux";

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.pollInterval = null;
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    this.loadCommentsFromServer();
    // if (!this.pollInterval) {
    //   this.pollInterval = setInterval(this.loadCommentsFromServer, 2000);
    // }
  }
  componentWillMount() {
    if (this.pollInterval) clearInterval(this.pollInterval);
    this.pollInterval = null;
  }

  render() {
    const { data, text, error, isLoading } = this.state;
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
  footer: state.footer
});

export default connect(mapStateToProps)(CommentBox);
