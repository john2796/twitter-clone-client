import React from 'react';
import styled from 'styled-components';

const CardContentWrapper = styled.div`
  padding: 0 10px 10px 10px;

  h2 {
    font-size: 18px;
  }
  p {
    font-size: 16px;
  }
  a {
    text-decoration: none;
    color: gray;
  }
`


const CardContent = () => {

  return (
    <CardContentWrapper>
      <h2>Get Started with React</h2>
      <p>React makes it painless to create interactive Uis. Design simple views for each state in your application</p>
      <a href="....">reactjs.org</a>
    </CardContentWrapper>
  )
}
export default CardContent;
