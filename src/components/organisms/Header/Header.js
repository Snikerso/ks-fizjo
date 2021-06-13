import  React from "react"
import Link from 'next/link'
import styled from "styled-components"
import LogoWithName from "/src/components/atoms/interface/Logo/LogoWithName"
import Navigation from "/src/components/molecules/Navigation/Navigation"
import NavigationBar from "/src/components/molecules/NavigationBar/NavigationBar"
import SocialList from "/src/components/molecules/SocialList/SocialList"
import ButtonRegister from "/src/components/atoms/buttons/ButtonRegister/ButtonRegister"

const StyledHeader = styled.header`
    position: relative;
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
`


let Header = ({location}) => {

  return (
    <StyledHeader>
        <SocialList header/>

            <LogoWithName />
   
        <Navigation location={location} />
        <NavigationBar location={location} />
        <ButtonRegister header text={'ZAREZERWUJ TERMIN'}/>
    </StyledHeader>
  )
}
export default Header;

