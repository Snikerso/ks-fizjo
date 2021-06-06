import * as React from "react"
import {createClient} from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

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
   fallback:true
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

const ServicesDetails = ({service}) => {
  const {opis} = service.fields
  // console.log(opis)
  return (
    <div>
      <div>{opis.content.map(item=> {
        console.log(item) 
        if(item.content[0].value === ""){
          return <><br/></>
        }else{

          return documentToReactComponents(item)
        }
        })}
      </div>
    </div>
  )
}

export default ServicesDetails
