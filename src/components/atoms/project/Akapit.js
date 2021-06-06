import React from 'react'
import styled from 'styled-components'
import LineGradient from '../LineGradient'
import LineGradientVertical from '../LineGradientVertical'
import Paragraph from '../Paragraph'

const StyledWrapper = styled.div`
    position: relative;
    >*{
        margin-top:20px;
    }

`

const StyledWrapperInner = styled.div`
    display:flex;
    flex-direction:column;


    >*{
        margin-top:5px;
    }

`
const StyledHead = styled.h3`
    color:white;
    text-decoration:none;
    font-family:nunito-semibold;
    font-size:22px;

`

const Akapit = ({text,title}) => {

    return (
        <StyledWrapper>
            <LineGradientVertical/>
            <StyledWrapperInner>
                <StyledHead>{title}</StyledHead>

            </StyledWrapperInner>
            <Paragraph secondary text={text}/>
        </StyledWrapper>
    )
  }
  
export default Akapit


