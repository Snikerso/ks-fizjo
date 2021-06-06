import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'




const StyledLink = styled(Link)`
    align-self:flex-end;
    
    :hover{
        cursor: pointer;
    }
`
const StyledButton = styled.button`   
    width:153px;
    height:41px;
    background: linear-gradient(137.97deg, #57E0F4 -39%, #7F9DF4 39.36%, #AE00BE 100.89%);
    border-radius: 12px;
    border:none;
    outline:none;
    color:white;
    justify-self:center;
    align-self:center;
    
    :hover{
        cursor: pointer;
    }
`

const Button = ({text,slug, onClick}) => {
    return (
        <StyledLink to={`/project/${slug}/`}>
            <StyledButton onClick={onClick}>{text}</StyledButton>
        </StyledLink>
    )
  }
  
  export default Button


