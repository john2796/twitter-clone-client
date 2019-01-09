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
      text: "",
      isLoading: true
    };
    this.pollInterval = null;
  }

  componentDidMount() {
    this.setState({ isLoading: true });
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
        else this.setState({ data: res.data, isLoading: false });
      });
  };
  onUpdateComment = id => {
    const oldComment = this.state.data.find(c => c._id === id);
    if (!oldComment) return;
    this.setState({
      text: oldComment.text,
      updateId: id
    });
  };

  onDeleteComment = id => {
    const i = this.state.data.findIndex(c => c._id === id);
    const data = [
      ...this.state.data.slice(0, i),
      ...this.state.data.slice(i + 1)
    ];
    this.setState({ data });
    fetch(`api/comments/${id}`, { method: "DELETE" })
      .then(res => res.json())
      .then(res => {
        if (!res.success) this.setState({ error: res.error });
      });
  };

  onChangeText = e => {
    const newState = { ...this.state };
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  };

  submitComment = e => {
    e.preventDefault();
    const { text, updateId } = this.state;
    if (!text) return;
    if (updateId) {
      this.submitUpdatedComment();
    } else {
      this.submitNewComment();
    }
  };

  submitNewComment = () => {
    const { text } = this.state;
    const data = [
      ...this.state.data,
      {
        text,
        _id: Date.now().toString(),
        updatedAt: new Date(),
        createdAt: new Date()
      }
    ];
    this.setState({ data });
    fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text })
    })
      .then(res => res.json())
      .then(res => {
        if (!res.success)
          this.setState({ error: res.error.message || res.error });
        else this.setState({ text: "", error: null });
      });
  };

  submitUpdatedComment = () => {
    const { text, updateId } = this.state;
    fetch(`/api/comments/${updateId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text })
    })
      .then(res => res.json())
      .then(res => {
        if (!res.success)
          this.setState({ error: res.error.message || res.error });
        else this.setState({ text: "", updateId: null });
      });
  };

  render() {
    const { data, text, error, isLoading } = this.state;
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
        <div className="container">
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

export default CommentBox;
