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
  message,
  styleName,
  comment,
  envelope,
  sync,
  heart,
  trash,
  deleteItem
}) => {
  return (
    <PostWrapper>
      <HeaderContainer
        icon={icon}
        title={title}
        subtitle={subtitle}
        date={date}
        message={message}
        styleName={styleName}

      />
      <CardContainer
        image={image}
        secondTitle={secondTitle}
        secondSubTitle={secondSubTitle}
      />
      <Footer
        comment={comment}
        envelope={envelope}
        sync={sync}
        heart={heart}
        trash={trash}
        deleteItem={deleteItem}
      />
    </PostWrapper>
  )
}
export default Post;