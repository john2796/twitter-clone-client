import React, { Component } from "react";
import styled from "styled-components";
import CommentBox from "../../../appLogin/dashboard/commentBox/CommentBox";

const FooterWrapper = styled.div`
  @import url("https://use.fontawesome.com/releases/v5.5.0/css/all.css");
  .footer-icons {
    max-width: 500px;
    margin: 0 auto;
    display: flex;
  }
  p {
    color: gray;
    padding: 10px 0 10px 0;
    font-size: 19px;
    cursor: pointer;
    transition: ease-in 300ms;
    &:nth-of-type(4) {
      margin-right: 40px;
    }
    &:last-child {
      &:hover {
        color: #9f0725;
      }
    }
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
`;

class Footer extends Component {
  state = {
    isLiked: false,
    likes: 10
  };

  likedHandler = () => {
    const { isLiked } = this.state;
    this.setState(prevState => {
      return {
        isLiked: !prevState.isLiked,
        likes: !isLiked ? (prevState.likes += 1) : (prevState.likes -= 1)
      };
    });
  };

  render() {
    const { likes, isLiked } = this.state;
    const { comment, sync, heart, envelope, trash, deleteItem } = this.props;
    return (
      <FooterWrapper>
        <div className="footer-icons">
          <p>
            <i className={`far fa-${comment}`} />
          </p>
          <p>
            <i className={`fas fa-${sync}-alt`} />
            <span>6</span>
          </p>
          <p>
            <i
              className={`fas fa-${heart}`}
              onClick={this.likedHandler}
              style={isLiked ? { color: "red" } : { color: "gray" }}
            />
            <span>{likes}</span>
          </p>
          <p>
            <i className={`far fa-${envelope}`} />
          </p>
          <p onClick={deleteItem}>
            <i className={`fas fa-${trash}-alt`} />
          </p>
        </div>

        <CommentBox />
      </FooterWrapper>
    );
  }
}

export default Footer;
