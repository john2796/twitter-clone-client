import React, { Component } from 'react';
import styled from 'styled-components';
import Tweet from './Tweet';

const TweetsFormWrapper = styled.div`
input[type="text"], textarea {
  display: flex;
  width: 100%;
  padding: 10px 0;
  border-radius: 10px;
  padding-left: 10px;
  border: 1px solid #e0e0e0;
  outline-color:#30acf1;
  &:active {
    outline-color:#30acf1;
  }
}

.form__inputs {
  margin-bottom: 15px;
}

.form__button {
  background: #30acf1;
  color: #ffff;
  font-size: 16px;
  font-weight: bold;
  padding: 15px 25px;
  border-radius: 10px;
  outline: none;
  &:active {
    transform: translateY(4px);
  }
}

`

class TweetsForm extends Component {
  state = {
    items: [],
    currentItem: { name: '', tweet: '', key: Date.now() }
  }

  handleInput = (name, e) => {
    const currentItem = { ...this.state.currentItem };
    currentItem[name] = e.target.value;
    this.setState({ currentItem });
  }

  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.name === '' || newItem.tweet === '') return;
    //we do not want to add empty value to to our tweet, we check for that. If it’s not empty, items array is destructured and newItem is added. both has to be true
    if (newItem.name !== '' && newItem.tweet !== '') {
      const items = [...this.state.items, newItem]
      this.setState({
        items,
        currentItem: { name: '', tweet: '', key: '' }
      });
    }
    //  console.log(this.state.currentItem)
    //    console.log(this.state.items)
  }


  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }

  render() {
    const {
      currentItem: { name, tweet },
      items
    } = this.state;

    const tweetPost = items.map((item, i) => (
      <Tweet
        deleteItem={this.deleteItem}
        item={item}
        key={i}
      />
    ))
    return (
      <TweetsFormWrapper>
        <form onSubmit={this.addItem}>
          <div className="form__inputs input__01">
            <label htmlFor="name">Your Name</label> <br />
            <input
              type="text"
              value={name}
              onChange={this.handleInput.bind(this, 'name')}
            />
          </div>
          <div className="form__inputs">
            <label htmlFor="placeholder">Your tweets</label> <br />
            <textarea
              name="tweets"
              id="tweets"
              cols="30"
              rows="10"
              value={tweet}
              onChange={this.handleInput.bind(this, 'tweet')}
            ></textarea>
          </div>
          <button type="submit" className="form__button">Send Tweet</button>
        </form>
        <h1>Tweet posts</h1>
        {tweetPost}
        <hr />
      </TweetsFormWrapper >
    );
  }
}

export default TweetsForm;

