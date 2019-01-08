import React, { Component } from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

const data = [
  {
    _id: 1,
    author: "Bryan",
    text: "Wow this is neat",
    updatedAt: new Date(),
    createdAt: new Date()
  },
  {
    _id: 2,
    author: "You",
    text: "You're __right!__",
    updatedAt: new Date(),
    createdAt: new Date()
  }
];

class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="comments">
            <h2>Comments:</h2>
            <CommentList data={data} />
          </div>
          <div className="form">
            <CommentForm />
          </div>
        </div>
      </div>
    );
  }
}

export default CommentBox;
