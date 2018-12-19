import React, { Component } from 'react';
class Tweet extends Component {
  state = {
    isDone: false,
    notes: ['1', '2', '3', '4', '5', '6', '7'],


  }


  toggleDoneHandler = () => {
    this.setState(prevState => {
      return { isDone: !prevState.isDone };
    });
  }

  render() {
    const { item: { name, tweet, key }, deleteItem, timeStamp, clicked, } = this.props;
    const { isDone } = this.state;
    let randomImg = clicked ? this.state.notes[Math.floor(Math.random() *
      this.state.notes.length)] : null
    return (
      <li>
        <h1
          onClick={this.toggleDoneHandler}
          style={isDone ? { textDecoration: "line-through" } : { textDecoration: "none" }}
        >{name}</h1>
        <p>{tweet}</p>
        <p>Timestamp : {timeStamp}</p>
        <p>random images here:{randomImg} </p>
        <button
          onClick={() => deleteItem(key)}
        >Delete me</button>


      </li >
    );
  }
}

export default Tweet;