import React from 'react';
import styled from 'styled-components';


const Img = styled.div`
  min-height: 300px;
  max-width: 100%;
  background-size: 156% 140%;
  background-position: center;
  background-repeat: no-repeat;
`

const CardBanner = ({ image }) => (
  <Img
    style={{
      backgroundImage: `url(${image})`
    }}
  ></Img>
)

export default CardBanner;
