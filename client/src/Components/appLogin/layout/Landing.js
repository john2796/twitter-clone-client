import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h2`
  @import url("https://fonts.googleapis.com/css?family=Charm");
  font-size: 30px;
`;

class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <Title>Instagram</Title>
            <img
              src="https://ultimatemember.com/wp-content/uploads/bb-plugin/cache/instagram-circle.png"
              alt="..."
            />
            <br />
            <Link
              to="/register"
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px"
              }}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Register
            </Link>
            <Link
              to="/login"
              style={{
                marginLeft: "2rem",
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px"
              }}
              className="btn btn-large waves-effect white hoverable black-text"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;
