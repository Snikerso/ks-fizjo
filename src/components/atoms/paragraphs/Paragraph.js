import React from 'react'
import styled from 'styled-components'


const StyledParagraph = styled.p`
    font-family: ${({theme}) =>theme.fonts.second};
    color:#201F1F;
    text-decoration:none;
    max-width:calc(484px + (645 - 484) * ((100vw - 300px) / (1900 - 300)));
    font-size:calc(16px + (20 - 16) * ((100vw - 300px) / (1900 - 300)));
    line-height:24.4px;
    margin:10px 0px;

    @media  (min-width: ${({ theme }) => theme.media.media1400}) {
      font-size:calc(15px + (20 - 15) * ((100vw - 1366px) / (1900 - 1366)));
    }
`

const Paragraph = ({text, secondary}) => {
    return (

      <StyledParagraph secondary={secondary}>{text}</StyledParagraph>
    )
  }
  
export default Paragraph


