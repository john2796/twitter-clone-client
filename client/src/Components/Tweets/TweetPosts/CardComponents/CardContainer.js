import React from 'react';
import styled from 'styled-components';
import CardBanner from './CardBanner';
import CardContent from './CardContent';


const Cards = styled.div`
  border: 1px solid #E9E9E9;
  border-radius: 5px;
  max-width: 500px;
  margin: 0 auto;
`


const CardContainer = ({
  image,
  secondTitle,
  secondSubTitle,
}) => {

  return (
    <Cards className="wrapper">
      <CardBanner
        image={image}
      />
      <CardContent
        secondTitle={secondTitle}
        secondSubTitle={secondSubTitle}
      />
    </Cards>
  );
}

export default CardContainer;