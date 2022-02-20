import * as React from "react"
import styled, { css } from 'styled-components'
import FacebookEmbaded from "/src/components/molecules/FacebookEmbaded/FacebookEmbaded"
import IconVoucher from "/src/components/atoms/interface/Icons/IconVoucher"

const StyledAside = styled.aside`
    position: absolute;
    top:200px;
    right:40px;
    display:flex;
    flex-direction:column;
    align-items:center;

    ${({isActive})=>
        isActive ? css`
        
            @media  (max-width: ${({ theme }) => theme.media.media1400}) {
                display:none;
            }    
        `
        :
        css`
            
            @media  (max-width: ${({ theme }) => theme.media.media1400}) {
                display:none;
            }    
        `
    }

    @media  (min-width: ${({ theme }) => theme.media.media1400}) {
            right:120px;
        }


`
const Section = styled.section`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin-bottom:60px;
        
`
const Head = styled.h3`
    text-align:center;
    color: ${({ theme }) => theme.colours.second.default};
    margin-bottom:30px;
    font-size:15px;
    font-weight:500;
    ${({bolder})=>
        bolder && css`
            margin-bottom:50px;
            font-weight:700;
    `}

    @media  (min-width: ${({ theme }) => theme.media.media1500}) {
        font-size:25px;
    }
`


const Aside = React.forwardRef((props,ref) => {
    const {location} = props

    let isActive = location.pathname.includes("/uslugi/") || location.pathname.includes("/metody-pracy/") 


    return (
        <StyledAside ref={ref} isActive={isActive} >
            <Section>
            <Head>Skontaktuj się w sprawie vouchera</Head>
            <a href={"https://www.facebook.com/fizjoterapia.kamilasplocharska"} target={"_blank"}>
                <IconVoucher />
            </a>
            </Section>
            <Head bolder>Bądź ze mną na bieżąco !</Head>
            <FacebookEmbaded/>
        </StyledAside>
    )
})

export default Aside