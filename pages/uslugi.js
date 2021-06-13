

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

  const res = await client.getEntries({ content_type: 'uslugi_kategorie' })

  return {
    props: {
      services: res.items
    },
    revalidate: 1
  }
 
}

export default function ServicesPage ({services}){

  return (
    <StyledWrapper>
      <HeadPage text={"Oferta"}/>

      <Accordion.Wizzard>
        {services.map((service,key)=> <Accordion.Item second key={service.sys.id} item={service.fields}/>)}
      </Accordion.Wizzard>
    </StyledWrapper>
  )
}

