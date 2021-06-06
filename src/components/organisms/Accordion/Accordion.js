import Link from 'next/link'
import React, { Children, useRef, useState } from 'react';
import IconArrow from '../../atoms/interface/Icons/IconArrow';
import Price from '../../atoms/interface/Price/Price';
import Time from '../../atoms/interface/Time/Time';
import Image from '../../atoms/interface/Image/Image';
import Head from '../../atoms/heads/Heads';
import { AccordionProvider, useAccordionContext } from './context';

import {
  StyledTab,
  StyledWrapper,
  StyledSummary,
  StyledDetails,
  StyledWrapperTimeAndPrice,
  StyledCloser,
} from './Styles';
import IconArrowUp from '../../atoms/interface/Icons/IconArrowUp';

const Tab = React.forwardRef((props,ref) => {
  const { currentElement } = useAccordionContext();
  const { title, page, src, onClick } = props;

  return (
    <StyledTab isActive={currentElement.includes(page)} onClick={onClick} ref={ref}  >
      <Image width={'300px'} height={'300px'} src={`/assets/images/interface/${src}`} alt={"lala"}/>
      <h4>{title.toUpperCase()}</h4>
    </StyledTab>
  );
})

const Closer = ({  page, onClick }) => {
  const { currentElement } = useAccordionContext();

  return (
    <StyledCloser isActive={currentElement.includes(page)} onClick={onClick}>
      <IconArrowUp/>
    </StyledCloser>
  );
};


const Item= React.forwardRef((props, ref) => {
  const {
    index,
    isActive,
    isHidden,
    item,
    second
  } = props;

  const { currentElement, setCurrentElement , currentElementVisible, setCurrentElementVisible} = useAccordionContext();
  const tabRef = useRef(null)
  
  const handleToogleDetail = (index,tabRef) => {
    if (!currentElement.includes(index)) {
      setCurrentElement([...currentElement, currentElement[index]=index]);
      setCurrentElementVisible([...currentElementVisible, currentElementVisible[index]=index]);
      
    }else{
      let newCurrentElement = currentElement.filter(item => item !==index)
      let newCurrentElementVisible = currentElementVisible.filter(item => item !==index)
      setCurrentElement(newCurrentElement)
      setTimeout(()=> setCurrentElementVisible(newCurrentElementVisible), 600)
      tabRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  };

  if(second){
    return(
      
      <>
        <StyledWrapper second >
            <Tab ref={tabRef} title={item.title} page={index} src={item.img} onClick={() => handleToogleDetail(index,tabRef)} />
            {isHidden ?
              <div>
                {item.list.map((detail,key )=>{
                  return(
                    <>
                      {/* <StyledDetails isActive={isActive}  key={key} second href={`/uslugi/${detail.slug}`} > */}
                        <div>
                          <Head headType={3} text={detail.title}/>
                          <p>{detail.description_short}</p>
                        </div>
                        <div>
                          <StyledWrapperTimeAndPrice>
                            <Price price={detail.price}/>
                            <Time time={detail.time}/>
                          </StyledWrapperTimeAndPrice>
                          {/* <Link href={`/uslugi/${detail.slug}`}/> */}
                        </div>
                      {/* </StyledDetails> */}
                    </>
                  )
                })}
              <Closer onClick={() => handleToogleDetail(index,tabRef)} />
            </div>
          : null }
            
      </StyledWrapper>
    </>
    )
  } else {
      return (
        <>
          <StyledWrapper  first >
              <StyledSummary first onClick={() => handleToogleDetail(index)} >
                <p>{item.title}</p>
                <IconArrow isActive={isActive}/>
              </StyledSummary>
                {isActive ? (
                  <>
                    {item.list.map(detail =>{
                      return(
                        <>
                          <StyledDetails href={`/uslugi/${detail.slug}`} first>
                            <p>{detail.title}</p>
                            {/* <Link href={`/uslugi/${detail.slug}`}/> */}
                          </StyledDetails>
                        </>
                      )
                    })}
                  </>
                ):null}

          </StyledWrapper>
        </>
      );
    }
  })

const Wizzard = ({ children }) => {
  const [currentElement, setCurrentElement] = useState([]);
  const [currentElementVisible, setCurrentElementVisible] = useState([]);

  const childrenWithProps = Children.map(children, (child, index) => {

    return React.cloneElement(child, {
      index,
      isActive: currentElement.includes(index),
      isHidden: currentElementVisible.includes(index),
    });
  }); 

  return (
    <AccordionProvider
      value={{ currentElement, setCurrentElement, currentElementVisible, setCurrentElementVisible }}>
      {childrenWithProps}
      
    </AccordionProvider>
  );
};

export { Item, Wizzard };
