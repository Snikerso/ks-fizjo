import React from 'react'
import styled from 'styled-components'

const StyledHead = styled.h2`
    color:${({theme})=> theme.colours.second.default};
    font-family:${({theme})=>theme.fonts.first};
    font-weight: 700;
    text-decoration: none;
    font-size: calc(36px + (42 - 36) * ((100vw - 300px) / (1600 - 300)));
    margin-top: 20px;
    margin-bottom: ${({marginBottom})=>marginBottom};

    @media  (min-width: ${({ theme }) => theme.media.media1400}) {

    font-size:calc(30px + (42 - 30) * ((100vw - 1366px) / (1900 - 1366)));
  }

`

const HeadPage = ({text, marginBottom = "43px"}) => {
    return (
      <StyledHead marginBottom={marginBottom}>{text}</StyledHead>
  )
  }
  
export default HeadPage