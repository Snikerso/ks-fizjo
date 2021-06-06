import { useStaticQuery, graphql} from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Paragraph from '../../atoms/paragraphs/Paragraph';
import Link from 'src/components/atoms/interface/Link/Link';
import Head from 'src/components/atoms/Heads/Heads';
import Image from '../../atoms/interface/Image/Image';


const StyledWrapper = styled.div`
    position: relative;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:100%;



    a > :first-child{
      margin-top:30px;
      width: calc(200px + (250 - 200) * ((100vw - 300px) / (1600 - 300)));
    }

    @media  (min-width: ${({ theme }) => theme.media.media700}) {
      width:571px;
    }

    @media  (min-width: ${({ theme }) => theme.media.media1400}) {
      flex-direction:row;
      width: calc(752px + (1000 - 752) * ((100vw - 1466px) / (1920 - 1466)));;
    
      a > :first-child{
        margin-top:30px;
        width: calc(200px + (250 - 200) * ((100vw - 1466px) / (1920 - 1466)));
      }
    }

`

const StyledWrapperInner = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    margin: -20px 20px;
    padding:20px 30px;
    width:100%;
    background-color:${({theme})=>theme.colours.grey};
    margin-top:30px;

    p{
      font-family:first;
      font-size: calc(13px + (21 - 13) * ((100vw - 300px) / (1600 - 300)));
    }
    h3{
      font-weight:700;
      font-size: calc(20px + (30 - 20) * ((100vw - 300px) / (1600 - 300)));
    }
    
    @media  (min-width: ${({ theme }) => theme.media.media1400}) {
      background-color:transparent;

      h3{
        font-weight:700;
        
        font-size: calc(22px + (30 - 22) * ((100vw - 1366px) / (1900 - 1366)));
      }
      p{

        font-size: calc(14px + (21 - 14) * ((100vw - 1366px) / (1900 - 1366)));
      }
        
    }
    }


`

const StyledLink = styled(Link)`
    font-size: calc(16px + (21 - 16) * ((100vw - 300px) / (1600 - 300)));
    font-weight:900;
    align-self:flex-end;
    cursor:pointer;


    @media  (min-width: ${({ theme }) => theme.media.media1400}) {
      background-color:transparent;
        margin-right:20px;
        font-size: calc(16px + (21 - 16) * ((100vw - 1366px) / (1900 - 1366)));
 
        
    }
`

const MethodItem = ({item}) => {
    let {title,description_short, slug, img } = item
    const data = useStaticQuery(graphql`

    query {
      allFile(
        filter: {
          extension: { regex: "/(png)/" }
          relativePath: { regex: "/service/i" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  
  const image = data.allFile.edges.find(item => item.node.base===img)

    return (
            <StyledWrapper>
                <Link to={slug}>
                  <Image fluid={image.node.childImageSharp.fluid} />
                </Link>
                <StyledWrapperInner>
                    <Head headType={3} text={title} />
                    <Paragraph text={description_short} />
                    <StyledLink to={slug}>Więcej</StyledLink>
                </StyledWrapperInner>
            </StyledWrapper>
    )
  }

export default MethodItem