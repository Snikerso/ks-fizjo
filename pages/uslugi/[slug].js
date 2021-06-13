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
   fallback:false
 }
}

export async function getStaticProps({params}) {
  const {items} = await client.getEntries({
    content_type:'uslugi',
    'fields.slug': params.slug
  })
  return {
    props: { service: items[0]}
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

  /* justify-self: flex-start; */

  width:100%;
  @media  (min-width: ${({ theme }) => theme.media.media1400}) {
    margin-left:120px;
  }

  > p {
    margin-bottom:30px;
  }
`
const StyledWrapperMeta = styled.div`
  display:flex;
  
  /* margin-left:-35px; */

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

const StyledImage = styled.div`
  width: calc(200px + (324 - 200) * ((100vw - 360px) / (1900 - 360)));
  /* height: calc(200px + (324 - 200) * ((100vw - 360px) / (1900 - 360))); */

  @media (min-width: ${({theme})=> theme.media.media1400}){
  
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

const ServicesDetails = ({service}) => {
  const router = useRouter();
  const linkPath = router.asPath.split('/')
  const slug = router.query.slug
  linkPath.shift();

   const {title,opis,price,time,zdjcie} = service.fields
   const image = zdjcie.fields
   return (
     <StyledWrapperPage>
       <div><Link href={`/${linkPath[0]}`} ><div>{linkPath[0]}</div></Link>{` < ${slug}`}</div>
        <HeadPage text={title} />
        
        <StyledWrapper>
           <StyledWrapperInfo> 
            <StyledImage>
              <Image width={image.file.details.image.width} height={image.file.details.image.height}  layout={"responsive"} src={`https:${image.file.url}`} alt={image.file.description}/>
            </StyledImage>
            <StyledWrapperMeta>
              <Price price={price}/>
              <Time time={time}/>
  
            </StyledWrapperMeta>
            <ButtonRegister text={"ZAREZERWUJ TERMIN"}/> 
  
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


