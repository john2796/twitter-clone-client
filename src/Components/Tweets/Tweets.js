import React, { Component } from 'react';
import styled from 'styled-components';
import TweetsForm from './TweetsForm';

const TweetsWrapper = styled.div`
height: 100vh;
h2 { 
   padding: 50px 0 40px 0;
}


`

class Tweets extends Component {
  state = {}
  render() {
    return (
      <TweetsWrapper>
        <h2>Post Your Tweets <span role="img" aria-label="handsup">🙌</span></h2>
        <TweetsForm />
      </TweetsWrapper>
    );
  }
}

export default Tweets;