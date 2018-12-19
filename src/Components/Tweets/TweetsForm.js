import React, { Component } from 'react';
import styled from 'styled-components';
import Tweet from './Tweet';
import Post from './TweetPosts/Post/Post';
import moment from 'moment'


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

// let randomImageIndex = Math.floor(Math.random() * numImagesAvailable);

const image = "https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png";
const icon = " https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png"

class TweetsForm extends Component {
  state = {
    items: [],
    currentItem: {
      name: '', tweet: '', key: moment().format('MMMM Do YYYY, h:mm:ss a'),
    },
    timeStamp: moment().format('MMMM Do YYYY'),
  }

  handleInput = (name, e) => {
    const currentItem = { ...this.state.currentItem };
    currentItem[name] = e.target.value;
    this.setState({
      currentItem,
    });
  }

  addItem = (event) => {
    event.preventDefault();
    // const randomIndex = Math.floor(Math.random() * 6);
    const newItem = this.state.currentItem;
    if (newItem.name === '' || newItem.tweet === '') return;
    if (newItem.name !== '' && newItem.tweet !== '') {
      const items = [...this.state.items, newItem]
      this.setState({
        items,
        currentItem: {
          name: '',
          tweet: '',
          key: moment().format('MMMM Do YYYY, h:mm:ss a'),
        },
      });
    }

    // console.log(this.state.currentItem)
    // console.log(this.state.items)
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
      items,
      timeStamp,
      clicked

    } = this.state;
    const tweetPost = items.map((item, i) => (

      <Post />

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
        <Post
          icon={icon}
          title="Lambda School"
          subtitle="@Lambda School - "
          date="December 19th 2018"
          image={image}
          secondTitle="Get Started with React"
          secondSubTitle="React makes it painless to create interactive UIs. Design simple views for each state in your application"





        />

        <hr />
      </TweetsFormWrapper >
    );
  }
}

export default TweetsForm;

