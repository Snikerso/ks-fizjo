import React from 'react'
import styled, { css } from 'styled-components'

const StyledSvg = styled.svg`
  ${({isOpen})=>
  isOpen && css`
    transform:rotate(90deg);
  `}
`

export default function IconArrowUp() {
    return (
      <svg width="29" height="19" viewBox="0 0 29 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.10595 18.3247L0.605957 14.7211L14.6059 0.642456L28.6059 14.7211L25.1059 18.3247L14.6059 7.71536L4.10595 18.3247Z" fill="#846A61"/>
      </svg>
    )
  }