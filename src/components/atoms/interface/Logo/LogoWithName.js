import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import Logo from '/src/components/atoms/interface/Logo/Logo'

const StyledWrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top: 20px;
    margin-bottom:60px;
    :hover{
        cursor: pointer;
    }

`

const LogoWithName = () => {
    
    return (
        <StyledWrapper>
            <Link href={"/"}>
                <div>
                    <Logo/>
                </div>
            </Link>
        </StyledWrapper>
    )
  }
  
  export default LogoWithName


