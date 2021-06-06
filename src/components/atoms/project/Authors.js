import React from 'react'
import styled from 'styled-components'

const StyledAuthors= styled.p`
    display:flex;
    font-family:nunito-light;
    font-weight:normal;
    font-size: 13px;
    color:${({theme})=>theme.white};
    
`;
const Authors = ({text, authors}) => {

    return (
        <StyledAuthors>{text} {authors}</StyledAuthors>
    )
  }
  
export default Authors


