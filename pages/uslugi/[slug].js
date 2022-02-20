import styled from "styled-components";
import {createClient} from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useRouter } from 'next/router';
import HeadPage from "/src/components/atoms/heads/HeadPage";
import Price from "/src/components/atoms/interface/Price/Price";
import Time from "/src/components/atoms/interface/Time/Time";
import ButtonRegister from "../../src/components/atoms/buttons/ButtonRegister/ButtonRegister";
import Image from "../../src/components/atoms/interface/Image/Image";
import Link from "next/link";

const client = createClient({
  space: 'uqo1vba8ib2m',
  accessToken: 'e9jBuvpH3wUaiAJyqWZtqmu4q-moE3FRqBorkMa2KjU',
})

export const getStaticPaths = async () => {

  const res = await client.getEntries({
   content_type:'uslugi'
 })
 const paths = res.items.map(item => {
   return {
     params: { slug: item.fields.slug}
   }
 })

 return {
   paths,
   fallback:true,
 }
}

export async function getStaticProps({params}) {
  const {items} = await client.getEntries({
    content_type:'uslugi',
    'fields.slug': params.slug
  })
  return {
    props: { service: items[0]},
    revalidate: 1
  }
}

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
const StyledWrapperPage = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;

  @media  (min-width: ${({ theme }) => theme.media.media1400}) {
    align-items: flex-start;
  }
`

const StyledWrapperText = styled.div`
  width:300px;
  font-size: 17px;
  
  p{
    font-family: second;
    line-height: 32px;
    color:#201F1F;
  }
  li{
    color:#201F1F;
  }
  h1,h2,h3,h4,h5,h6 {
    color: ${({theme})=>theme.colours.second.default};
  }
  b {
    color: ${({theme})=>theme.colours.second.default};
  }
  
  @media  (min-width: ${({ theme }) => theme.media.media700}) {
    margin-left:120px;
    min-width: 600px;
  }
  @media  (min-width: ${({ theme }) => theme.media.media1400}) {
    margin-left:120px;
  }

`


const StyledWrapperMeta = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
 
  @media  (min-width: ${({ theme }) => theme.media.media1400}) {
    button{
    margin-left: 30px;
  }
  }
  
`
const StyledWrapperTimeAndPrice = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  width:204px;
  margin-bottom: 30px;

  @media  (min-width: ${({ theme }) => theme.media.media1400}) {
    align-items:flex-start;
    /* margin: 0 0;
    margin-bottom: 30px; */

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


const StyledNavBreadCrumbs = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;

  font-size: 18px;
  span{
    margin:0px 4px;
  }
  > :first-child {
   color: ${({theme})=>theme.colours.accent.default};
   text-decoration: underline;
     font-weight: bold;
   :hover{
     cursor:pointer;

   }
  }
`
const StyledImage = styled.div`
  width: calc(200px + (324 - 200) * ((100vw - 360px) / (1900 - 360)));
  @media (min-width: ${({theme})=> theme.media.media1400}){
  
    width: calc(230px + (324 - 230) * ((100vw - 1366px) / (1900 - 1366)));
  }
`


const ServicesDetails = ({service}) => {
  const router = useRouter();
  const linkPath = router.asPath.split('/')
  const slug = router.query.slug
  linkPath.shift();

   const {title,opis,price,time,zdjcie} = service.fields
   const image = zdjcie.fields
   
   return (
     <StyledWrapperPage>
       <StyledNavBreadCrumbs>
          <div><Link href={`/${linkPath[0]}` } ><div>{`${linkPath[0]}`}</div></Link>
          </div><span>{" < "}</span><div>{`${slug}`}</div></StyledNavBreadCrumbs>
        <HeadPage text={title} />
        
        <StyledWrapper>
           <StyledWrapperInfo> 
            <StyledImage>
              <Image width={image.file.details.image.width} height={image.file.details.image.height}  layout={"responsive"} src={`https:${image.file.url}`} alt={image.file.description}/>
            </StyledImage>
            <StyledWrapperMeta>
              <StyledWrapperTimeAndPrice>
                {/* <Price price={price}/> */}
                {/* <Time time={time}/> */}

              </StyledWrapperTimeAndPrice>
  
              <ButtonRegister text={"ZAREZERWUJ TERMIN"}/> 
            </StyledWrapperMeta>
  
          {/* {service.methods && <Methods methods={service.methods}/> } */}
          
          </StyledWrapperInfo>
            <StyledWrapperText>
  
            <div>{opis.content.map(item=> {
              console.log(item) 
              if(item.content[0].value === ""){
                return <><br/></>
              }else{

                return documentToReactComponents(item)
              }
              })}
            </div>
      
          </StyledWrapperText>
  
        </StyledWrapper>
      </StyledWrapperPage>
    )
  }

export default ServicesDetails


