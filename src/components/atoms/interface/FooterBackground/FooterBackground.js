import React from 'react'
import styled from 'styled-components'

const StyledSvg = styled.svg`
    z-index:-1;
    position:absolute;
    bottom:-50px;
    left:50%;
    transform:translateX(-50%);
    width:1440px;

    @media (min-width: ${({ theme }) => theme.media.media1400}) { 
        width:100%;
    }

`
const FooterBackground = ({onClick}) => {

    return (
        <StyledSvg  width="100%" height="100%" viewBox="0 0 1920 292" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1950.95 52.9893C1994.49 -41.3244 668.458 13.6919 0 52.9893V291.581H1950.95V52.9893Z" fill="#F5CFAB"/>
        </StyledSvg>
    )
  }
  
  export default FooterBackground


