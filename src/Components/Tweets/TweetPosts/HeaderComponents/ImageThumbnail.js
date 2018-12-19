import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  width: 65px;
  height: 50px;
  padding: 0 10px;
  margin-top: 70px;

`

const ImageThumbnail = ({ icon }) => (
  <Img src={icon} alt="..." />
)

export default ImageThumbnail;
