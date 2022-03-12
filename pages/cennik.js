import * as React from "react";
import {createClient} from 'contentful'
import HeadPage from "/src/components/atoms/heads/HeadPage";
import styled from "styled-components";
import Paragraph from "../src/components/atoms/paragraphs/Paragraph";
import Head from "../src/components/atoms/heads/Heads";

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


export default function PriceListPage() {
  return (
    <>
        <HeadPage text={"Cennik"}/>
        <StyledWrapper>
        <p><b>Masaż kobido:</b> 180-200 zł*/70-75 min</p>
        <p><b>Konsultacja fizjoterapeutyczna:</b> 130-150 zł*/45-60 min</p>
        <p><b>Fizjoterapia:</b> 130-150 zł*/45-60 min</p>
        <p><b>Masaż (klasyczny, relaksacyjny, sportowy, bańką chińską ,antycellulitowy):</b> 130 - 150 zł*/50 min </p>
        <p>* Cena zależna od miejsca zamieszkania pacjenta</p>
        <br/>
        <br/>
        <br/>
        <br/>
        <Head text={'Pierwsza wizyta'} headType="h2"/>
        <Paragraph text="Na pierwszej wizycie przeprowadzam z pacjentem obszerny wywiad na temat dolegliwości bólowych, który pozwoli mi na szybsze ustalenie przyczyny bólu. Jeżeli pacjent miał wykonywane badania (np. RTG, USG  itp. ) należy zabrać je ze sobą na pierwszą wizytę. Pacjent jest też poproszony o przygotowania dużego ręcznika/koca . Następnie przeprowadzę wstępną terapię , przekaże informację jak pacjent samodzielnie może uczestniczyć w powrocie do poprawy stanu zdrowia      (odpowiednie ćwiczenia, zmiana stylu życia, rolowanie itp.)"/> 
        </StyledWrapper>

        {/* <PriceList list={services}/> */}
    </>
  )
}