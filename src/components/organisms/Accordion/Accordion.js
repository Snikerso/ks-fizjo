import Link from 'next/link'
import React, { Children, useRef, useState } from 'react';
import IconArrow from '/src/components/atoms/interface/Icons/IconArrow';
import Price from '/src/components/atoms/interface/Price/Price';
import Time from '/src/components/atoms/interface/Time/Time';
import Image from '/src/components/atoms/interface/Image/Image';
import Head from '/src/components/atoms/heads/Heads';
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
  const { title, page, image, onClick } = props;
  return (
    <StyledTab isActive={currentElement.includes(page)} onClick={onClick} ref={ref}  >
      <Image width={image.file.details.image.width} height={image.file.details.image.height}  layout="responsive" src={`https:${image.file.url}`} alt={image.file.description}/>
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
            <Tab ref={tabRef} title={item.rodzajUslug} page={index} image={item.zdjcie.fields} onClick={() => handleToogleDetail(index,tabRef)} />
            {isHidden ?
              <div>
                {item.uslugi.map(({fields},key )=>{
                  return(
                    <>
                      <StyledDetails isActive={isActive} key={key} second  >
                        <div>
                          <Head headType={3} text={fields.title}/>
                          <p>{fields.krotkiOpis}</p>
                        </div>
                        <div>
                          <StyledWrapperTimeAndPrice>
                            {/* <Price price={fields.price}/> */}
                            {/* <Time time={fields.time}/> */}
                          </StyledWrapperTimeAndPrice>
                          <Link href={`/uslugi/${fields.slug}`}>Więcej</Link>
                        </div>
                      </StyledDetails>
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
              <StyledSummary first onClick={() => handleToogleDetail(index)}>
                <p>{item.fields.rodzajUslug}</p>
                <IconArrow isActive={isActive}/>
              </StyledSummary>
                {isActive ? (
                  <>
                    {item.fields.uslugi.map(({fields},key) =>{
                      return(
                        <>
                          <StyledDetails key={key} href={`/uslugi/${fields.slug}`} first>
                            <p>{fields.title}</p>
                            <Link href={`/uslugi/${fields.slug}`}>więcej</Link>
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
