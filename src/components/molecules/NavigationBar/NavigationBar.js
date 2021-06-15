import  React, { useState } from "react"
import styled from "styled-components"
import Bar from "/src/components/atoms/interface/Bar/Bar"
import ButtonClose from "/src/components/atoms/buttons/ButtonClose/ButtonClose"
import NavItem from "/src/components/atoms/interface/NavItem/NavItem"
import {navigation} from "/constants/routes";
import Logo from "/src/components/atoms/interface/Logo/Logo"


const NavPanel = styled.div`
    position: fixed;
    z-index: 1000;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding-top: 40px;
    top: 0px;
    height: 100vh;
    overflow: hidden;
    background-color: ${({ theme }) => theme.colours.white};


    > * :first-child{
        justify-self:flex-start;
        margin-bottom: 70px;
    }

    > * {
        margin-bottom:10px;
    }

    @media  (max-width: ${({ theme }) => theme.media.media900}) {
        display:flex;
    }

    .button_close{
        position:absolute;
        right:20px;
        top: 20px;
    }
`


const StyledWrapper = styled.nav`
    display:block;
    flex-direction:column;
    align-items:center;
    text-align: center;
    position:absolute;
    top:15%;
    right:65px;
    transform:translateY(-50%);

    @media (min-width: ${({ theme }) => theme.media.media900}) {
        display:none;
    }
    
`

const NavigationBar = ({location}) => {
const [isOpen, setIsOpen] = useState(false)

  return (
      <>
        <StyledWrapper>
        <Bar onClick={()=>setIsOpen(prev =>!prev)}/>
        
        </StyledWrapper>
        {isOpen &&   (
            <NavPanel>
                <Logo/>
                {navigation.map(({to, text} )=> (<NavItem bar  onClick={()=>setIsOpen(false)} id={"nav-item-line"} to={to} text={text} location={location}/>) )}
                <ButtonClose onClick={()=>setIsOpen(prev =>!prev)}/>
            </NavPanel>
        )}
    </>
  )
}

export default NavigationBar