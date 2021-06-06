import * as React from "react";
import {createClient} from 'contentful'
import PriceList from "/src/components/organisms/PriceList/PriceList";
import HeadPage from "/src/components/atoms/heads/HeadPage";

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
        <PriceList list={services}/>
    </>
  )
}
