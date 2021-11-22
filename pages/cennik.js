import * as React from "react";
import {createClient} from 'contentful'
import HeadPage from "/src/components/atoms/heads/HeadPage";
import styled from "styled-components";

const StyledWrapper = styled.div`
  p{
    margin:20px 0px;
    font-size: 20px;
    color: #201F1F;
    b{
      color: #846A61;
    }
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

export default function PriceListPage({services}) {
  return (
    <>
        <HeadPage text={"Cennik"}/>
        <StyledWrapper>
        <p><b>Konsultacja fizjoterapeutyczna:</b> 120zł</p>
        <p><b>Terapia / Masaż:</b> 120 -160zł</p>
        <p><b>Dojazd:</b> 20 - 50zł</p>
        </StyledWrapper>
        {/* <PriceList list={services}/> */}
    </>
  )
}