import React from 'react'
import styled, { css } from 'styled-components'
import IconCalendar from '../../interface/Icons/IconCalendar'

const StyledLink = styled.a`
    text-decoration:none;
    
    :hover{
        cursor: pointer;
    }
`
const StyledButton = styled.button`

    background: ${({theme})=>theme.colours.accent.default};
    color: ${({theme})=>theme.colours.second.default};
    display:flex;
    align-items:center;
    justify-content:space-around;
    border:none;
    outline:none;
    width:204px;
    height:54px;

    :hover{
        cursor: pointer;
    }

    ${({header})=>
        header && css`
            position: absolute;
            right:50%;
            top:160px;
            transform:translateX(50%);
            font-size:12px;
            font-weight:500;
            justify-self:center;
            @media (min-width:${({theme})=>theme.media.media900}){
                top:100px;
                right:140px;

            }
            @media (min-width: ${({theme})=> theme.media.media1400}){
                
                width:  calc(180px + (204 - 180) * ((100vw - 1366px) / (1900 - 1366)));
                font-size: calc(10px + (12 - 10) * ((100vw - 1366px) / (1900 - 1366)));
                right: calc(125px + (140 - 125) * ((100vw - 1366px) / (1900 - 1366)));

                svg{
                    width:30px;
                }
            }
    `}
    
`



const ButtonRegister = ({text,slug, onClick,header}) => {
    return (
        <StyledLink className={"button-register"}href={`https://www.facebook.com/fizjoterapia.kamilasplocharska`} target={"_blank"}>
            
            <StyledButton header={header} onClick={onClick}><IconCalendar/><p>{text}</p></StyledButton>
        </StyledLink>
    )
  }
  
  export default ButtonRegister


