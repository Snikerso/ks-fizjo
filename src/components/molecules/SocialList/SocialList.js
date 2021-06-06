import React from 'react'
import styled, { css } from 'styled-components'
import IconFacebook from '/src/components/atoms/interface/Icons/IconFacebook'
import IconInstagram from '/src/components/atoms/interface/Icons/IconInstagram'

const StyledWrapper = styled.div`
    display: flex;  
    > * {
            margin-right:8px;
        }

    ${({header})=>
        header && css`
            position: absolute;
            top:20px;

            align-self:flex-start;

            > * {
                margin-right:0px;
                margin-left:11px;
            }

            @media (min-width:${({theme})=>theme.media.media700}){
                margin-left:100px;
            }
            @media (min-width:${({theme})=>theme.media.media900}){
                align-self:flex-end;
                right:40px;
                top:50px;
            }

            @media (min-width: ${({theme})=> theme.media.media1400}){
                svg{
                    width:  calc(23px + (30 - 23) * ((100vw - 1366px) / (1900 - 1366)));
                }

            }
        `}

    ${({footer})=>
        footer && css`
            svg{
                width: 20px;
            }
        `}

`

export default function SocialList({header,footer}){

    return(
        <StyledWrapper header={header} footer={footer}>
            <IconFacebook />
            <IconInstagram/>
        </StyledWrapper>
    )
}