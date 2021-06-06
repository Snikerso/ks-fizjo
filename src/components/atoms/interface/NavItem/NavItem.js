import React from 'react'
import styled, { css } from 'styled-components'
import Link from 'next/link'

const StyledWrapper = styled.div`
    font-family:${({theme})=>theme.fonts.first};
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100px;
    padding:10px;
    color:${({theme})=>theme.colours.second.default};

    ${({isActive,bar})=>
        (isActive && bar) && css`
            background-color: ${({theme})=>theme.colours.accent.default};
            width:100%;
            padding:0px;
            padding:10px 0px;
    `}

    svg{
        width:100%;
    }
`

const StyledLink = styled(Link)`
    color:${({theme})=>theme.colours.second.default};
    text-decoration:none;
    text-align:center;
    font-weight:500; 
    font-size:20px;
    width:130px;

    :hover {
        color:${({theme})=>theme.colours.accent.default};
    }

    ${({isActive})=>
    
        isActive && css`
            color:${({theme})=>theme.colours.accent.default};
            font-weight:bold;
        
    `}

    ${({isActive,bar})=>
    
        (isActive && bar) && css`
            color: ${({theme})=>theme.colours.second.default};
            width:100%;
        
        `}
    @media (min-width: ${({theme})=> theme.media.media1400}){
        font-size: calc(16px + (20 - 16) * ((100vw - 1366px) / (1900 - 1366)));

    }


    

`

const NavItem = ({to,text,location, onClick,bar}) => {
    
    const isActive = location.pathname === to


    return (
        <StyledWrapper isActive={isActive} bar={bar}>
            <StyledLink  bar={bar} onClick={onClick} isActive={isActive} href={to}>{text}</StyledLink>
        </StyledWrapper>
    )
  }


export default NavItem