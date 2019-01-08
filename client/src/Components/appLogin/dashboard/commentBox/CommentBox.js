import React, { Component } from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import "./CommentBox.css";

class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      error: null,
      author: "",
      text: ""
    };
    this.pollInterval = null;
  }

  componentDidMount() {
    this.loadCommentsFromServer();
    if (!this.pollInterval) {
      this.pollInterval = setInterval(this.loadCommentsFromServer, 2000);
    }
  }
  componentWillMount() {
    if (this.pollInterval) clearInterval(this.pollInterval);
    this.pollInterval = null;
  }

  loadCommentsFromServer = () => {
    fetch(`http://localhost:5000/api/comments`)
      .then(data => data.json())
      .then(res => {
        if (!res.success) this.setState({ error: res.error });
        else this.setState({ data: res.data });
      });
  };

  onChangeText = e => {
    const newState = { ...this.state };
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  };

  submitComment = e => {
    e.preventDefault();
    const { author, text } = this.state;
    if (!author || !text) return;
    fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ author, text })
    })
      .then(res => res.json())
      .then(res => {
        if (!res.success)
          this.setState({ error: res.error.message || res.error });
        else this.setState({ author: "", text: "", error: null });
      });
  };

  render() {
    const { data, author, text, error } = this.state;

    return (
      <div>
        <div className="container">
          <div className="comments">
            <h2>Comments:</h2>
            <CommentList data={data} />
          </div>
          <div className="form">
            <CommentForm
              text={text}
              author={author}
              onChangeText={this.onChangeText}
              submitComment={this.submitComment}
            />
          </div>
          {error && <p>{error}</p>}
        </div>
      </div>
    );
  }
}

export default CommentBox;
