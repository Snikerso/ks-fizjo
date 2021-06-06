import * as React from "react"
import HeadPage from "src/components/atoms/heads/HeadPage"
import Phone from "src/components/atoms/interface/Phone/Phone"
import Mail from "src/components/atoms/interface/Mail/Mail"
import ButtonFacebook from "../components/atoms/buttons/ButtonFacebook/ButtonFacebook"
import styled from "styled-components"

const StyledWrapper = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  text-align:center;

  h2{
    width:253px;
  }

  >*{
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-bottom:50px;
  }


  @media  (min-width: ${({ theme }) => theme.media.media900}) {
    align-items:flex-start;
    text-align:left;
    h2{
    width:100%;
  }
    >*{
      align-items:flex-start;
      text-align:left;
    }

    }
`
const StyledWrapperContactItems = styled.div`

  >*{
    
    margin-bottom:20px;
  }
`

export default function KontaktPage() {
  return (
    <StyledWrapper>
      <div>
        <HeadPage text={"Skontaktuj się ze mną"} />
        <ButtonFacebook />
      </div>
      <div>
        <HeadPage text={"Telefonicznie lub mailowo"} />
        <StyledWrapperContactItems>
          <Phone/>
          <Mail/>

        </StyledWrapperContactItems>
      </div>
      
    </StyledWrapper>
  )
}

