import React, { useEffect, useRef } from "react"
import {createClient} from 'contentful'
import * as Accordion from '/src/components/organisms/Accordion/Accordion';
import {servicesData} from '/constants/data';
import styled from "styled-components";
import HeadPage from "/src/components/atoms/heads/HeadPage";

const StyledWrapper = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;

  @media(min-width: ${({theme})=>theme.media.media1400}){
    align-items:flex-start;
  }

`

const client = createClient({
  space: 'uqo1vba8ib2m',
  accessToken: 'e9jBuvpH3wUaiAJyqWZtqmu4q-moE3FRqBorkMa2KjU'
})

export async function  getStaticProps(){

  const res = await client.getEntries({ content_type: 'uslugi' })

  return {
    props: {
      recipes: res.items
    }
  }
 
}

export default function ServicesPage ({recipes}){
console.log(recipes)
  return (
    <StyledWrapper>
      <HeadPage text={"Oferta"}/>

      <Accordion.Wizzard>
        {servicesData.map((service,key)=> <Accordion.Item second key={service.id} item={service}/>)}
      </Accordion.Wizzard>
    </StyledWrapper>
  )
}

