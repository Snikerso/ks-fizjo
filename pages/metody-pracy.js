import * as React from "react";
import MethodList from "/src/components/organisms/MethodsList/MethodsList";
import {methodsData} from "/constants/data"
import HeadPage from "/src/components/atoms/heads/HeadPage";
import styled from "styled-components";


const StyledWrapper = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  width:100%;

  @media  (min-width: ${({ theme }) => theme.media.media1400}) {
    align-items:flex-start;

  }
`

export default function WorkMethodsPage () {

  return (
    <StyledWrapper>
      <HeadPage text={"Metody pracy"}/>
      <MethodList list={methodsData}/>
    </StyledWrapper>
  )
}

