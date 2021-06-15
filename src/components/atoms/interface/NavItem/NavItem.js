import React, { useEffect } from 'react'
import styled, { css } from 'styled-components'
import Link from 'next/link'
import {useRouter} from 'next/router'

const StyledWrapper = styled.div`
    font-family:${({theme})=>theme.fonts.first};
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100px;
    padding:10px;
    
    a{

        color:${({theme})=>theme.colours.second.default};
        text-decoration:none;
        :hover {
            color:${({theme})=>theme.colours.accent.default};
        }
    }


    ${({isActive})=>
        isActive && css`
            font-weight:bold;
            a{
                color:${({theme})=>theme.colours.accent.default};
                text-decoration:none;
                :hover {
                    color:${({theme})=>theme.colours.accent.default};
                }

            }`}   
    ${({bar})=>
        bar && css`
            font-size:30px;
            width:200px;
            text-align: center;
            a{
                :hover {
                color:white;
            }
        }`}   

    ${({isActive,bar})=>
        (isActive && bar) && css`
            background-color: ${({theme})=> theme.colours.accent.default};
            width:100%;
            padding:0px;
            padding:10px 0px;
            a{
                color:white;
                text-decoration:none;
            }

    `}


    svg{
        width:100%;
    }
`


const NavItem = ({to,text,location, onClick,bar}) => {

    let isActive=  location.route === to
    useEffect(()=>{
        isActive = location.route === to
    },[location])

    return (
        <StyledWrapper isActive={isActive} bar={bar}>
            <Link  bar={bar} onClick={onClick} isActive={isActive} href={to}>{text}</Link>
        </StyledWrapper>
    )
  }


export default NavItem