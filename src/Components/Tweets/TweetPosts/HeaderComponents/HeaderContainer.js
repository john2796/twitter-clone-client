import React from 'react';
import styled from 'styled-components';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';


const HeaderWrapper = styled.div`
display: flex;
  .wrapper { 
    max-width: 600px;
    margin: 0 auto;
  }



`

const HeaderContainer = () => (
  <HeaderWrapper>
    <ImageThumbnail />
    <div className="wrapper">
      <HeaderTitle />
      <HeaderContent />
    </div>
  </HeaderWrapper>
)

export default HeaderContainer;

