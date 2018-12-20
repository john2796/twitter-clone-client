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


const CardContent = ({ secondTitle, secondSubTitle }) => {

  return (
    <CardContentWrapper>
      <h2>{secondTitle}</h2>
      <p>{secondSubTitle}</p>
      <a href="....">reactjs.org</a>
    </CardContentWrapper>
  )
}
export default CardContent;
