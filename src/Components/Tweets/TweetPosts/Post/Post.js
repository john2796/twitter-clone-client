import React from 'react';
import HeaderContainer from '../HeaderComponents/HeaderContainer';
import CardContainer from '../CardComponents/CardContainer';
import styled from 'styled-components'
import Footer from '../FooterComponents/Footer';

const PostWrapper = styled.div`
  margin-bottom: 50px;
`

const Post = ({
  icon,
  title,
  subtitle,
  date,
  image,
  secondTitle,
  secondSubTitle,
}) => {
  return (
    <PostWrapper>
      <HeaderContainer
        icon={icon}
        title={title}
        subtitle={subtitle}
        date={date}

      />
      <CardContainer
        image={image}
        secondTitle={secondTitle}
        secondSubTitle={secondSubTitle}
      />
      <Footer />
    </PostWrapper>
  )
}
export default Post;