import React from 'react';
import styled from 'styled-components';


const HeaderWrapper = styled.div`
display: flex;
align-items: center;
margin: 0 auto;
min-width: 550px;

text-align: left;


h2 {
  align-self: baseline;
  font-size: 17px;
  margin-bottom: -5px;
  &:nth-of-type(2){
    color: gray;
    font-size: 15px;
    padding-left: 9px;
  }
}
`

const HeaderTitle = ({ title, subtitle, date }) => (
  <HeaderWrapper>
    <h2 >{title}</h2>
    <h2>{subtitle} <span>{date}</span>  </h2>
  </HeaderWrapper>
)

export default HeaderTitle;

