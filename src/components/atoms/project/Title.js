import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h3`
    font-family:nunito-regular;
    font-weight:normal;
    font-size: 20px;
    color ${({theme})=>theme.white};
    
`

const Title = ({text}) => {
    return (
        <StyledTitle>{text}</StyledTitle>
    )
  }
  
export default Title


