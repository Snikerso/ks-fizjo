import HeadPage from "../src/components/atoms/heads/HeadPage";
import Image from "../src/components/atoms/interface/Image/Image";
import * as Accordion from '../src/components/organisms/Accordion/Accordion';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styled from "styled-components";
import {createClient} from 'contentful'

const Section = styled.section`
  display:flex;
  flex-direction:column;
  align-items:center;
  width:100%;
  margin-top:20px;
  > p{
    margin-top:36px;
  }

  @media  (min-width: ${({ theme }) => theme.media.media1400}) {
    align-items:flex-start;

  }
`
const StyledWrapperAbout = styled.div`
  display:flex;
  flex-direction:column;
  max-width:600px;
  margin-top:70px;
  font-family: second;
  p{
    font-size: 18px;
  }

`


const client = createClient({
  space: 'uqo1vba8ib2m',
  accessToken: 'e9jBuvpH3wUaiAJyqWZtqmu4q-moE3FRqBorkMa2KjU'
})

export async function  getStaticProps(){

  const res_services = await client.getEntries({ content_type: 'uslugi_kategorie' })
  const res_main = await client.getEntries({ content_type: 'main' })
  return {
    props: {
      services: res_services.items,
      main: res_main.items,
    },
    revalidate: 1
  }
}


export default function IndexPage ({services,main}) {

  return (
    <>
      <Section>
        <HeadPage text={"O mnie"}/>
        <Image width={main[0].fields.imageAbout.fields.file.details.image.width} height={main[0].fields.imageAbout.fields.file.details.image.height}  layout={"responsive"} src={`https:${main[0].fields.imageAbout.fields.file.url}`} alt={main[0].fields.imageAbout.description}/>
        <StyledWrapperAbout>
          {main[0].fields.about.content.map(item=> {
    
              if(item.content[0].value === ""){
                return <><br/></>
              }else{

                return documentToReactComponents(item)
              }
              })}
          </StyledWrapperAbout>
      </Section>
      <Section>
        <HeadPage marginBottom={"20px"} text={"Oferta"}/> 
        <Accordion.Wizzard>
          {services.sort((a,b)=> a.fields.order - b.fields.order).map(services=> <Accordion.Item  key={services.id} item={services}/>)}
        </Accordion.Wizzard>
      </Section>
      <Section> 
        <HeadPage text={"Pierwsza wizyta"}/>
        <Image width={main[0].fields.imageVisit.fields.file.details.image.width} height={main[0].fields.imageVisit.fields.file.details.image.height}  layout={"responsive"} src={`https:${main[0].fields.imageVisit.fields.file.url}`} alt={main[0].fields.imageVisit.description}/>
        <StyledWrapperAbout>
          {main[0].fields.firstVisit.content.map(item=> {
              if(item.content[0].value === ""){
                return <><br/></>
              }else{
                return documentToReactComponents(item)
              }
              })}
          </StyledWrapperAbout>
        </Section>
    </>
 )
}