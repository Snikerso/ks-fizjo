import React from "react"
import styled, { css } from "styled-components"
import {navigation} from "/constants/routes"
import FooterBackground from "/src/components/atoms/interface/FooterBackground/FooterBackground"
import Logo from "/src/components/atoms/interface/Logo/Logo"
import SocialList from "/src/components/molecules/SocialList/SocialList"
import Phone from "/src/components/atoms/interface/Phone/Phone"
import Mail from "/src/components/atoms/interface/Mail/Mail"
import Link from 'next/link'


const StyledWrapper = styled.footer`
    display:flex;
    position: relative;
    align-items:center;
    justify-content:center;
    overflow:hidden;
    width:100%;
    min-height:307px;
    .logo{
      width: calc(150px + (200 - 150) * ((100vw - 1440px) / (1900 - 1440)))
    }
    @media(min-width: ${({ theme }) => theme.media.media700}) {

      justify-content:space-around;
    }

`
const StyledWrapperInner = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    padding-bottom:0px;
    padding-top:100px;
    overflow:hidden;
    width:100%;

    @media(min-width: ${({ theme }) => theme.media.media1400}) {
      align-items:center;
    }
    @media(min-width: ${({ theme }) => theme.media.media1500}) {

      padding-bottom:30px;
    }
`

const StyledInformation = styled.div`
  display:flex;
  flex-direction:column;
  color: ${({theme})=>theme.colours.second.default};
  font-size:13px;

  > *{
    margin-top:15px;
  }

  ${({desktop}) =>
    desktop && css`
      display:none;
    `}

  @media  (min-width: ${({ theme }) => theme.media.media1400}) {
    font-size:15px;
    display:block;
  }

`

const StyledLink = styled(Link)`

color:${({theme})=>theme.colours.second.default};
    text-decoration:none;
    font-weight:500; 

    ${({block})=>
        block && css`
            display:block;
            text-transform: capitalize;
        `}

    @media  (min-width: ${({ theme }) => theme.media.media1400}) {
      font-size:calc(13px + (15 - 13) * ((100vw - 1366px) / (1900 - 1366)));
  }
`

const Footer = React.forwardRef((props,ref) => {

  return (
    <>
    <StyledWrapper ref={ref}>
        <FooterBackground/>
      <StyledWrapperInner>
        <StyledInformation desktop> <Logo marginTop={"40px"}/></StyledInformation>
        <StyledInformation desktop> {navigation.map(item=><StyledLink href={item.to} block>{item.text.toLowerCase()}</StyledLink>)}</StyledInformation>
        <StyledInformation> <p>Skontakuj się</p> <Phone/><Mail/></StyledInformation>
        <StyledInformation> <p>Obserwuj mnie</p> <SocialList footer/></StyledInformation>
      </StyledWrapperInner>
    </StyledWrapper>

    </>
  )
})

export default Footer;

