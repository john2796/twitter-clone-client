import React from 'react';
import styled from 'styled-components';

const P = styled.p`
  font-size: 16px;
`

const HeaderContent = ({ message }) => (
  <P>
    {message}
  </P>
)

export default HeaderContent;
