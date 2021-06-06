
import HeadPage from "../src/components/atoms/heads/HeadPage";
import Paragraph from "../src/components/atoms/paragraphs/Paragraph";
import Image from "../src/components/atoms/interface/Image/Image";
import { servicesData } from "../constants/data";
import * as Accordion from '../src/components/organisms/Accordion/Accordion';
import styled from "styled-components";

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


export default function IndexPage () {


  return (
    <>
      <Section>
        <HeadPage text={"O mnie"}/>
        <Image width={'fill'} height={'300px'} src={"/assets/images/interface/kamila_home.png"} />
        <Paragraph text={"Cześć! Jeżeli tu jesteś to opowiem trochę o sobie :)"}/>
        <Paragraph text={"Jestem fizjoterapeutką, która lubi czuć się dobrze we własnym ciele, dlatego zadbam też o Twoje ciało i dobre samopoczucie."}/>
        <Paragraph text={"W pracy z pacjentem patrzę holistycznie, zniweluję ból wykorzystując różne formy terapii, pokażę jak ćwiczyć żeby był efekt, ale żeby się nie zniechęcić. Dbam o ciało kobiet aby zobaczyły, że każda może czuć się piękna, każda na swój indywidualny sposób. Jestem mamą dwójki dzieci więc wiem jak ważne jest dobre samopoczucie. Szczęśliwa mama to szczęśliwe dziecko :)"}/>
        <Paragraph text={"Pomagam również osobom, które chcą zacząć swoją przygodę z aktywnością fizyczną, ale nie wiedzą od czego zacząć. Przygotuje dla Ciebie całościowy program powrotu do zdrowia fizycznego ,ale także psychicznego. Efektem naszej pracy będzie nie tylko zmiana sylwetki, ale również poprawimy Twoja postawę ciała, wzmocnimy mięśnie, zmienimy nawyki dnia codziennego."}/>
        <Paragraph text={"Poczujesz, że możesz więcej ! :)"}/>
        <Paragraph text={"Zapraszam do kontaktu !  "}/>
      </Section>
      <Section>
        <HeadPage marginBottom={"20px"} text={"Oferta"}/> 
        <Accordion.Wizzard>
          {servicesData.map(services=> <Accordion.Item  key={services.id} item={services}/>)}
        </Accordion.Wizzard>
      </Section>
      <Section> 
        <HeadPage text={"Pierwsza wizyta"}/>
        <Image width={'fill'} height={'300px'}src={"/assets/images/interface/pierwsza_wizyta.png"} />
        <Paragraph text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}/>
        <Paragraph text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}/>
    </Section>
    </>
 )
}