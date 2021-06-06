import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'



const StyledLink = styled(Link)`
    color:${({theme})=>theme.colours.second.default};
    text-decoration:none;
    font-weight:500; 

    ${({block})=>
        block && css`
            display:block;
            text-transform: capitalize;
        `}
`


export default StyledLink
