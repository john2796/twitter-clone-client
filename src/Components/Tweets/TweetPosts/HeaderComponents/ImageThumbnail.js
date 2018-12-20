import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  width: 65px;
  height: 65px;
  margin-top: 58px;
`

const ImageThumbnail = ({ icon, styleName }) => (
  <Img className={styleName} src={icon} alt="..." />
)

export default ImageThumbnail;
