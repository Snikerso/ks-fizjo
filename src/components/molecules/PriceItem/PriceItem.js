import  Link  from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Head from '/src/components/atoms/heads/Heads';
import Price from '/src/components/atoms/interface/Price/Price';
import Time from '/src/components/atoms/interface/Time/Time';

const StyledWrapper = styled.div`
    display:flex;
    justify-items:space-between; 
    align-items:center; 
    width:100%;
    height: calc(40px + (60 - 40) * ((100vw - 300px) / (1900 - 300)));
    margin-bottom: calc(15px + (20 - 15) * ((100vw - 300px) / (1900 - 300)));
    padding: 14px 20px;
    background-color: ${({theme})=>theme.colours.grey};
    
    :hover{
        background-color: ${({theme})=>theme.colours.accent.hover};
        cursor: pointer;
    }
    :active{
        transform:scale(0.95);
        transition:0.3s transform;
    }

    h5{
        font-size: calc(11px + (18 - 11) * ((100vw - 300px) / (1900 - 300)));
        width: 100%;
    }

    @media  (min-width: ${({ theme }) => theme.media.media700}) {
       width:490px;
    }
`


const StyledWrapperTimeAndPrice = styled.div`
    display:flex;
    justify-content:space-between;
    margin-right:-20px;

    p{
        font-size: calc(12px + (18 - 12) * ((100vw - 300px) / (1900 - 300)));
        width: calc(50px + (80 - 50) * ((100vw - 300px) / (1900 - 300)));
    }

    svg{
        width: calc(20px + (28 - 20) * ((100vw - 300px) / (1900 - 300)));
    }

`

const StyledLink = styled(Link)`
    text-decoration:none;
    color: ${({theme})=>theme.colours.black};
`

const PriceItem = ({item}) => {
    let {title, price, time, slug } = item

    return (
        <StyledLink href={`/uslugi/${slug}/`}>
            <StyledWrapper>
                <Head headType={5} text={title}/>
                <StyledWrapperTimeAndPrice>
                    <Time time={time}/>
                    {/* <Price price={price}/> */}
                </StyledWrapperTimeAndPrice>
            </StyledWrapper>
        </StyledLink>
    )
  }
  
export default PriceItem;