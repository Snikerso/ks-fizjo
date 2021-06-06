import React from 'react'
import styled, { css } from 'styled-components'

const StyledSvg = styled.svg`
  ${({isActive})=>
  isActive && css`
    transform:rotate(90deg);
  `}
`

export default function IconArrowUp({isActive}) {
    return (
      <StyledSvg isActive={isActive} width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0)">
      <path d="M3.9585 2.625L6.37862 0L15.8335 10.5L6.37862 21L3.9585 18.375L11.0835 10.5L3.9585 2.625Z" fill="#846A61"/>
      </g>
      <defs>
      <clipPath id="clip0">
      <rect width="19" height="21" fill="white"/>
      </clipPath>
      </defs>
      </StyledSvg>
      
    )
  }
  



