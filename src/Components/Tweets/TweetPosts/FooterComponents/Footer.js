import React, { Component } from 'react';
import styled from 'styled-components';



const FooterWrapper = styled.div`
@import url("https://use.fontawesome.com/releases/v5.5.0/css/all.css");
max-width: 500px;
margin: 0 auto;
display: flex;
p{
  color: gray;
  padding: 10px 0 10px 0;
  font-size: 19px;
  cursor: pointer;
  transition:ease-in 300ms;

  &:hover {
    color: darkblue;
  }
  &:first-child {
    margin-right: 40px;
  }
  span {
    margin-right: 40px;
    margin-left: 10px;
  }
}
`

class Footer extends Component {
  state = {
    isLiked: false,
    likes: 4
  }

  likedHandler = () => {
    const { isLiked } = this.state;


    this.setState(prevState => {
      return {
        isLiked: !prevState.isLiked,
        likes: !isLiked ? prevState.likes += 1 : prevState.likes -= 1
      };
    });
  }
  render() {
    const { likes, isLiked } = this.state;
    return (
      <FooterWrapper>
        <p><i class="far fa-comment"></i></p>
        <p>
          <i class="fas fa-sync-alt"></i><span>6</span>
        </p>
        <p>

          <i class="fas fa-heart"
            onClick={this.likedHandler}
            style={isLiked ? { color: "red" } : { color: "gray" }}
          ></i><span>{likes}</span>
        </p>
        <p>
          <i class="far fa-envelope"></i>
        </p>


      </FooterWrapper>

    );
  }
}

export default Footer;