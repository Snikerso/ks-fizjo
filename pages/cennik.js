import * as React from "react";
import PriceList from "/src/components/organisms/PriceList/PriceList";
import {servicesData} from '/constants/data';
import HeadPage from "/src/components/atoms/heads/HeadPage";

export default function PriceListPage() {



  return (
    <>
        <HeadPage text={"Cennik"}/>
        <PriceList list={servicesData}/>
    </>
  )
}
