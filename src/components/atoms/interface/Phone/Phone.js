import React from 'react'
import styled from 'styled-components'
import IconPhone from '../Icons/IconPhone'

const StyledWrapper = styled.div`
  display:flex;
  align-items:center;
  color: ${({theme})=>theme.colours.second.default};
  font-weight:500;
  > :nth-child(2){
    margin-left:15px;
  }
`

const Phone = () => {
    return (
        <>
        <StyledWrapper>
          <IconPhone/>
          <p>{`605 828 128`}</p>
        </StyledWrapper>
        </>
    )
  }
  
export default Phone


