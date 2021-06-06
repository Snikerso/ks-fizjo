import { graphql, Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import HeadPage from "../atoms/heads/HeadPage";
import Price from "../atoms/interface/Price/Price";
import Time from "../atoms/interface/Time/Time";
import Paragraph from "../atoms/paragraphs/Paragraph";
import ButtonRegister from "../atoms/buttons/ButtonRegister/ButtonRegister";
import Head from "../atoms/heads/Heads";
import IconArrowLink from "../atoms/interface/Icons/IconArrowLink";
import StyledLink from "../atoms/interface/Link/Link";
import Image from "../atoms/interface/Image/Image";

const StyledWrapper = styled.div`
  display:flex;
  flex-direction:column;
  h3{
      font-size:22px;
    }

  @media  (min-width: ${({ theme }) => theme.media.media1400}) {
    flex-direction:row;
    max-width:calc(740px + (850 - 740) * ((100vw - 1400px) / (1900 - 1400)));
    .button-register{
      margin-left:-35px;
    }
  }
`
const StyledWrapperText = styled.div`
  display:flex;
  flex-direction:column;

  @media  (min-width: ${({ theme }) => theme.media.media1400}) {
    margin-left:80px;
  }

  > p {
    margin-bottom:30px;
  }
`
const StyledWrapperMeta = styled.div`
  display:flex;
  margin-left:-35px;

  > :nth-child(2){
    margin-left:30px;
    
  }
`
const StyledWrapperInfo = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;


  > *{
    margin-bottom:35px;
  }

  @media  (min-width: ${({ theme }) => theme.media.media1400}) {
    align-items:flex-start;

  }
`

const StyledWrapperMethods = styled.div`
align-self:flex-start;
width:100%;


h3{
  font-size:20px;
}

@media  (min-width: ${({ theme }) => theme.media.media1400}) {
    margin-left:-35px;

  }

`
const Method = styled.div`
  display: flex;
  justify-content:space-between;
  align-items:center;
  background-color:${({theme})=>theme.colours.grey};
  margin:10px 0;
  padding: 15px 20px;
  max-width: 472px;
  width:100%;
  font-weight:700;
  font-size:16px;

  :hover{
    background-color: ${({theme})=>theme.colours.accent.hover}
  }

  @media (min-width: ${({theme})=> theme.media.media1400}){
    width:220px;
    height:none;
    padding: 15px 20px;
  }

`

const StyledImage = styled(Image)`
  width: calc(200px + (324 - 200) * ((100vw - 360px) / (1900 - 360)));

  @media (min-width: ${({theme})=> theme.media.media1400}){
    margin-left:-35px;
    width: calc(230px + (324 - 230) * ((100vw - 1366px) / (1900 - 1366)));
  }
`

function Methods({methods}){
  return(
    <StyledWrapperMethods>
          <Head typeHead={3}  text={"Metody pracy "} />
          { methods.map(item =>{
            return(
              <StyledLink to={`/metody-pracy/${item.slug}`}>
                <Method>
                  {item.title} <IconArrowLink/>
                  </Method>
              </StyledLink>
            )})
            }
    </StyledWrapperMethods>
  )
}

export default function ServiceDetailsTemplate({data, pageContext: {  service } }) {

  const image = data.allFile.edges[0].node.childImageSharp.fluid
  
  return (
    <>
      <HeadPage text={service.title} />
      <StyledWrapper>
        <StyledWrapperInfo>
          <StyledImage fluid={image}/>
          <StyledWrapperMeta>
            <Price price={service.price}/>
            <Time time={service.time}/>

          </StyledWrapperMeta>
          <ButtonRegister text={"ZAREZERWUJ TERMIN"}/>

        {service.methods && <Methods methods={service.methods}/> }
        
        </StyledWrapperInfo>
        <StyledWrapperText>
          <Head headType={3} text={"Na czym polega"}  />
          <Paragraph text={service.description_short}/>
          <Head headType={3} text={"Dla kogo"}  />
          <Paragraph text={service.description_short}/>
          <Head headType={3} text={"Zalecenia po zabiegu"}  />
          <Paragraph text={service.description_short}/>
          <Head headType={3} text={"Przeciw wskazania"}  />
          <Paragraph text={service.description_short}/>
        </StyledWrapperText>
      </StyledWrapper>
    </>
  )
}

export const query = graphql`
  query ServiceImage($img:String) {
    allFile(
      filter: {
        extension: { regex: "/(png)/" }
        relativePath: { eq:$img  }
      }
    ) {
      edges {
        node {
          base
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`