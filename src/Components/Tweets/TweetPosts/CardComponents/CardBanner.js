import React from 'react';
import styled from 'styled-components';


const Img = styled.div`
  background-image: url("https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png");
  min-height: 300px;
  max-width: 100%;
  background-size: 156% 140%;
  background-position: center;
  background-repeat: no-repeat;
`

const CardBanner = () => (
  <Img></Img>
)

export default CardBanner;
