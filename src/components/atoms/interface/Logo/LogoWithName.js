import React from 'react'
import styled from 'styled-components'
import Logo from '/src/components/atoms/interface/Logo/Logo'

const StyledWrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top: 20px;
    margin-bottom:60px;

`

const LogoWithName = () => {
    
    return (
        <StyledWrapper>
            <Logo/>
        </StyledWrapper>
    )
  }
  
  export default LogoWithName


