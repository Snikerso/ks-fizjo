import React from 'react';
import styled from 'styled-components';

const StyledHead1 = styled.h1`
  font-family: ${({theme})=>theme.fonts.first};
  color:${({theme})=>theme.colours.second.default};
`;
const StyledHead2 = styled.h2`
  font-family: ${({theme})=>theme.fonts.first};
  color:${({theme})=>theme.colours.second.default};
`;
const StyledHead3 = styled.h3`
  font-family:${({theme})=>theme.fonts.first};
  color:${({theme})=>theme.colours.second.default};
  font-size:20px;
`;
const StyledHead4 = styled.h4`
  font-family: ${({theme})=>theme.fonts.first};
  color:${({theme})=>theme.colours.second.default};
  font-weight:700;
  font-size:20px;
`;
const StyledHead5 = styled.h5`
  font-family: ${({theme})=>theme.fonts.first};
  color:${({theme})=>theme.colours.second.default};
  font-size:16px;
  font-weight:500;
`;
const StyledHead6 = styled.h6`
  font-family: ${({theme})=>theme.fonts.first};
  color:${({theme})=>theme.colours.second.default};
`;

export const Head = ({ text, headType }) => {
  switch (headType) {
    case 1:
      return <StyledHead1>{text}</StyledHead1>;
      break;
    case 2:
      return <StyledHead2>{text}</StyledHead2>;
      break;
    case 3:
      return <StyledHead3>{text}</StyledHead3>;
      break;
    case 4:
      return <StyledHead4>{text}</StyledHead4>;
      break;
    case 5:
      return <StyledHead5>{text}</StyledHead5>;
      break;
    case 6:
      return <StyledHead6>{text}</StyledHead6>;
      break;
    default:
      return <StyledHead3>{text}</StyledHead3>;
  }
};

export default Head;
