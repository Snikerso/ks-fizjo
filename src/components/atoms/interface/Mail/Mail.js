import React from 'react'
import styled from 'styled-components'
import IconMail from '../Icons/IconMail'

const StyledWrapper = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  color: ${({theme})=>theme.colours.second.default};
  font-weight:500;
  > :nth-child(2){
    margin-left:15px;
  }

`

const Mail = () => {
    return (
        <>
        <StyledWrapper>
          <IconMail/>
          <p>{`fizjoterapia.bydgoszcz@gmail.com`}</p>
        </StyledWrapper>
        </>
    )
  }
  
export default Mail


