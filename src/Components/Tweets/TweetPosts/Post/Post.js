import React from 'react';
import HeaderContainer from '../HeaderComponents/HeaderContainer';
import CardContainer from '../CardComponents/CardContainer';
import styled from 'styled-components'
import Footer from '../FooterComponents/Footer';

const PostWrapper = styled.div`
  margin-bottom: 50px;
`

const Post = () => {
  return (
    <PostWrapper>
      <HeaderContainer />
      <CardContainer />
      <Footer />
    </PostWrapper>
  )
}
export default Post;