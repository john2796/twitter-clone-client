import React, { Component } from 'react';
import styled from 'styled-components';
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

.image {
  width: 45px;
  height: 45px;
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


    } = this.state;
    const tweetPost = items.map((item) => (

      <Post
        icon={icon}
        title={item.name}
        subtitle="@Lambda School - "
        message={item.tweet}
        date={timeStamp}
        image={image}
        secondTitle="Get Started with React"
        secondSubTitle="React makes it painless to create interactive UIs. Design simple views for each state in your application"
        styleName="image"
        key={item.key}
        deleteItem={() => { if (window.confirm('Are you sure you wish to delete this tweet?')) this.deleteItem(item.key) }}


        comment="comment"
        envelope="envelope"
        sync="sync"
        heart="heart"
        trash="trash"
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
        <Post
          icon="http://www.telestream.net/images/home/logo-product-gameshow.png"
          title="pork belly"
          subtitle="@Bacon ipsum - "
          message="Bacon ipsum dolor amet picanha tri-tip pancetta andouille bacon ham hock. Cupim pork chop fatback pork shankle, picanha leberkas pastrami buffalo bresaola chuck pig. Sausage turducken boudin buffalo kielbasa ball tip fatback pork ribeye turkey. Ham fatback landjaeger kielbasa turkey. Cow ham hock prosciutto pork short loin.!"
          date={timeStamp}
          image="https://images.pexels.com/photos/196659/pexels-photo-196659.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          secondTitle="pork belly short ribs"
          secondSubTitle="ow pork belly short ribs turducken. Chicken shoulder tongue, tenderloin alcatra kielbasa strip steak. Landjaeger sirloin tongue leberkas. Rump porchetta bresaola, jerky pork pig ground round."
          comment="comment"
          envelope="envelope"
          sync="sync"
          heart="heart" />
        <Post
          icon="https://cdn.shopifycloud.com/hatchful-web/assets/313d73fa42f04a46213abc6267b4d074.png"
          title="Pastrami"
          subtitle="@Pastrami ribeye - "
          message="Pastrami ribeye prosciutto spare ribs biltong pork short loin. T-bone prosciutto tri-tip, frankfurter meatloaf meatball ball tip drumstick tail bresaola chuck pastrami. Rump shankle chicken."
          date={timeStamp}
          image="https://images.pexels.com/photos/326424/pexels-photo-326424.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          secondTitle="belly hamburger"
          secondSubTitle=" pork belly hamburger frankfurter meatball ham. Tri-tip salami meatball cupim short ribs t-bone sirloin ham jowl shankle fatback beef ribs."
          comment="comment"
          envelope="envelope"
          sync="sync"
          heart="heart" />
        <Post
          icon="https://brandmark.io/logo-rank/random/beats.png"
          title="pork chop"
          subtitle="@Alcatra  - "
          message="Alcatra pork chop tongue prosciutto meatloaf frankfurter strip steak chuck burgdoggen landjaeger. Jowl pig cow alcatra cupim ham fatback ribeye drumstick meatloaf meatball beef ribs burgdoggen. Chicken picanha turducken biltong ribeye tail ."
          date={timeStamp}
          image="https://images.pexels.com/photos/34140/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          secondTitle="landjaeger swine"
          secondSubTitle="landjaeger swine. Burgdoggen beef ribs bresaola pork loin prosciutto t-bone, beef ball tip tail fatback sirloin pork chop buffalo.!"
          comment="comment"
          envelope="envelope"
          sync="sync"
          heart="heart"
        />

        <hr />
      </TweetsFormWrapper >
    );
  }
}

export default TweetsForm;

