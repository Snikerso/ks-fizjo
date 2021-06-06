import React from "react"
import styled, { css } from "styled-components"
import NavItem from "/src/components/atoms/interface/NavItem/NavItem"
import {navigation} from "/constants/routes"

const StyledWrapper = styled.nav`
    position: relative;
    display:flex;
    flex-direction:row;
    justify-content:center;
    text-align:center;
    width:100%;
    height:100%;

    > *{
      margin: 0px 30px ;
    }

    @media  (max-width: ${({ theme }) => theme.media.media900}) {
        display:none;
    }
    @media  (min-width: ${({ theme }) => theme.media.media1400}) {
      
      > *{
        margin: 0px 20px ;
      }
    }

`


const Navigation = ({location}) => {
  
  return (
    <StyledWrapper >
      {navigation.map(({to, text} )=> (<NavItem  id={"nav-item-line"} location={location} to={to} text={text}/>) )}
    </StyledWrapper>
  )
}

export default Navigation
