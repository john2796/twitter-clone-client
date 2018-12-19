import React from 'react';
import styled from 'styled-components';
import moment from 'moment'


const HeaderWrapper = styled.div`
display: flex;
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

const HeaderTitle = () => (
  <HeaderWrapper>
    <h2>Lambda School</h2>
    <h2>@LambdaSchool - <span>{moment().format('MMMM Do YYYY, h:mm:ssa')}</span>  </h2>
  </HeaderWrapper>
)

export default HeaderTitle;

