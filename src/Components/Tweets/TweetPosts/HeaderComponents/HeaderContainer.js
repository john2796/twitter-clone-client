import React from 'react';
import styled from 'styled-components';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';


const HeaderWrapper = styled.div`
display: flex;
  .wrapper { 
    max-width: 550px;
    margin: 0 auto;
  }



`

const HeaderContainer = ({
  icon,
  title,
  subtitle,
  date, }) => (
    <HeaderWrapper>
      <ImageThumbnail
        icon={icon}
      />
      <div className="wrapper">
        <HeaderTitle
          title={title}
          subtitle={subtitle}
          date={date}
        />
        <HeaderContent />
      </div>
    </HeaderWrapper>
  )

export default HeaderContainer;

