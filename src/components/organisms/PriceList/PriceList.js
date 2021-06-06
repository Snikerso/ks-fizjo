import React from 'react'
import styled from 'styled-components'
import Head from '/src/components/atoms/heads/Heads'
import PriceItem from '/src/components/molecules/PriceItem/PriceItem'

const StyledWrapper = styled.div`
    display:flex;
    flex-direction:column;

`

const StyledWrapperInner = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    margin-bottom:40px;

    @media  (min-width: ${({ theme }) => theme.media.media1400}) {
        align-items:flex-start;
    }
`

const StyledPriceHeader = styled.div`
    position: relative;
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    margin-bottom:15px;
    padding:14px 20px;
    height:  calc(48px + (70 - 48) * ((100vw - 300px) / (1600 - 300)));
    background-color:  ${({theme})=>theme.colours.accent.default};

    h4{
        font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
    }

    @media  (min-width: ${({ theme }) => theme.media.media700}) {
        width:490px;
    }
    @media  (min-width: ${({ theme }) => theme.media.media1400}) {
        height:  calc(60px + (70 - 60) * ((100vw - 1366px) / (1900 - 1366)));
        h4{
            font-size: calc(20px + (26 - 20) * ((100vw - 1366px) / (1900 - 1366)));
        }
    }
`

const PriceList = ({list}) => {

    return (
        <>
            <StyledWrapper>
                {list.map(priceItem => {
                    return(
                        <>
                            <StyledWrapperInner>
                                <StyledPriceHeader> 
                                    <Head headType={4} text={priceItem.fields.rodzajUslug.toUpperCase()}/>
                                </StyledPriceHeader>
                                {priceItem.fields.uslugi.map(item =>(
                                    <PriceItem key={item.sys.id} item={item.fields} />
                                ))}
                            </StyledWrapperInner>
                        </>
                    )
                })}
            </StyledWrapper>
        </>
    )
  }
  
export default PriceList