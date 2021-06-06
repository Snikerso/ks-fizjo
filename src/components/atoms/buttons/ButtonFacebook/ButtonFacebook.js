import React from 'react'
import styled from 'styled-components'
import IconFacebook from '/src/components/atoms/interface/Icons/IconFacebook'


const StyledWrapper = styled.div`
    width:204px;
    height:54px;
    
    a{
        text-decoration:none;
    
        :hover{
            cursor: pointer;
        }
    }
`

const StyledButton = styled.button`
    width:204px;
    height:54px;
    border: 4px solid ${({theme})=>theme.colours.accent.default};
    background-color:transparent;
    color: ${({theme})=>theme.colours.second.default};
    font-size:12px;
    font-weight:500;
    display:flex;
    align-items:center;
    justify-content:space-around;
    outline:none;
    justify-self:center;
    
    :hover{
        cursor: pointer;
    }
    a{
        text-decoration:none;
    
        :hover{
            cursor: pointer;
        }
    }
`



const ButtonFacebook = ({text,slug, onClick}) => {
    return (
        <StyledWrapper>
            <a href={`https://www.facebook.com/fizjoterapia.kamilasplocharska` } target="_blank" >
                <StyledButton onClick={onClick}><IconFacebook/><p>{'PRZEZ FACEBOOKA'}</p></StyledButton>
            </a>
        </StyledWrapper>
    )
  }
  
  export default ButtonFacebook


