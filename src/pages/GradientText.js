// GradientText.js
import React, { Children } from 'react';
import styled from 'styled-components';

const GradientTextWrapper = styled.span`
  background: linear-gradient(315deg, #8e44ad, #3498db, #1abc9c);
  -webkit-background-clip: text;
  color: transparent;
  display: inline;
  font-weight: bold;

`;

const GradientText = ({ children }) => {
  return <GradientTextWrapper>{children}</GradientTextWrapper>;
};

export default GradientText;