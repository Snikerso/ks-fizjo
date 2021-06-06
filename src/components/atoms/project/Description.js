import React from 'react'
import styled from 'styled-components'
import LineGradient from '../LineGradient'
import Paragraph from '../Paragraph'

const StyledWrapper = styled.div`

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

const Description = ({text}) => {

    return (
        <StyledWrapper>
            <StyledWrapperInner>
                <StyledHead>{"Description"}</StyledHead>
                <LineGradient id={"head"}/>
            </StyledWrapperInner>
            <Paragraph secondary text={text}/>
        </StyledWrapper>
    )
  }
  
export default Description


