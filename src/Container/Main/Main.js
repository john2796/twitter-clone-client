import React, { Component } from 'react';
import styled from 'styled-components'
import Tweets from '../../Components/Tweets/Tweets';

const MainWrapper = styled.div`
  background: #f7f7f7;
  margin-top: -21px;

.wrapper {
  background: #ffffff;
  
}
`

class Main extends Component {
  state = {}
  render() {
    return (
      <MainWrapper>
        <div className="wrapper">
          <Tweets />
        </div>

      </MainWrapper>
    );
  }
}

export default Main;