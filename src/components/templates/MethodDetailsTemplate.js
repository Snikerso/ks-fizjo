import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import HeadPage from "../atoms/heads/HeadPage";
import Paragraph from "../atoms/paragraphs/Paragraph";
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

function Services({services}){

  return(
    <StyledWrapperMethods>
          <Head typeHead={3} text={"Powiązane usługi "} />
          {services.map(item =>{
            return(
              <StyledLink to={`/uslugi/${item.slug}/`}>
                <Method>
                  {item.title} <IconArrowLink/>
                  </Method>
              </StyledLink>
            )})}
    </StyledWrapperMethods>
  )
}

export default function MethodDetailsTemplate({data, pageContext: {  method } }) {

  const image = data.allFile.edges[0].node.childImageSharp.fluid
  return (
    <>
      <HeadPage text={method.title} />
      <StyledWrapper>
        <StyledWrapperInfo>
          <StyledImage fluid={image}/>

          {method.services && <Services services={method.services}/> }
        
        </StyledWrapperInfo>
        <StyledWrapperText>

          <Head headType={3} text={"Na czym polega"}  />
          <Paragraph text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "}/>
          <Head headType={3} text={"Dla kogo"}  />
          <Paragraph text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "}/>
          <Head headType={3} text={"Zalecenia po zabiegu"}  />
          <Paragraph text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "}/>
          <Head headType={3} text={"Przeciw wskazania"}  />
          <Paragraph text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "}/>
        </StyledWrapperText>
      </StyledWrapper>
    </>
  )
}

export const query = graphql`
  query MethodImage($img:String) {
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