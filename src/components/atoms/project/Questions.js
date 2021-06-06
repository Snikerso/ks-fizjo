import React from 'react'
import styled from 'styled-components'
import LineGradient from '../LineGradient'
import LineGradientVertical from '../LineGradientVertical'
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
    font-size:20px;

`
const Question = styled.p`
    color:white;
    text-decoration:none;
    font-family:nunito-semibold;
    font-size:12px;

`

const Questions = ({questions}) => {

    return (
        <StyledWrapper>
            <StyledWrapperInner>
                <StyledHead>{"Description"}</StyledHead>
                    {questions.map((item ,key)=> <Question>({key + 1 }) {item}</Question>)}
            </StyledWrapperInner>
            
        </StyledWrapper>
    )
  }
  
export default Questions


