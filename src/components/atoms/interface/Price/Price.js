import React from 'react'
import styled from 'styled-components'
import IconPrice from '../Icons/IconPrice'

const StyledWrapper = styled.div`
  display:flex;
  align-items:center;
  font-size:15px;
  color: ${({theme})=>theme.colours.second.default};
  font-weight:500;

  p{
    margin-left:7px;
  }
  path{
    fill: ${({theme})=>theme.colours.second.default};
  }
`

const Price = ({price}) => {
    return (
        <>
        <StyledWrapper>
          <IconPrice/>
          <p>{`${price}zł`}</p>
        </StyledWrapper>
        </>
    )
  }
  
export default Price


