import React from 'react'
import styled from 'styled-components'

const StyledBar = styled.svg`
    position:absolute;
    top:-10px;
    cursor: pointer;
`

const Bar = ({onClick}) => {

    return (
        <StyledBar onClick={onClick} width="33" height="28" viewBox="0 0 33 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="3.16968" width="33" height="2" fill="#846A61"/>
        <rect y="13.1697" width="33" height="2" fill="#846A61"/>
        <rect y="23.1699" width="33" height="2" fill="#846A61"/>
        </StyledBar>
        
    )
  }
  
  export default Bar


