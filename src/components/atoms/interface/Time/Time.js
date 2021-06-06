import React from 'react'
import styled from 'styled-components'
import IconTime from '../Icons/IconTime'

const StyledWrapper = styled.div`
  display:flex;
  align-items:center;
  color: ${({theme})=>theme.colours.second.default};
  word-wrap: normal;
  font-weight:500;
  font-size:15px;
  p{
    margin-left:5px;
  }
  path{
    fill: ${({theme})=>theme.colours.second.default};
  }
`


const Time = ({time}) => {
    return (
        <StyledWrapper>
          <IconTime/>
          <p>{`${time}min`}</p>
        </StyledWrapper>
    )
  }
  
export default Time


