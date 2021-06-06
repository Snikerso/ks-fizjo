import React from 'react'
import styled from 'styled-components'
import MethodItem from 'src/components/molecules/MethodItem/MethodItem'

const StyledWrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;

    > * {
        margin-bottom:80px;
    }

    @media  (min-width: ${({ theme }) => theme.media.media1400}) {
        margin-left:-22.5px;
        > * {
         margin-bottom:60px;
        }
    }
`

const MethodList = ({list}) => {

    return (
        <>
            <StyledWrapper>
                {list.map(item=> <MethodItem key={item.id} item={item} /> )}
            </StyledWrapper>
        </>
    )
  }
  
  export default MethodList


