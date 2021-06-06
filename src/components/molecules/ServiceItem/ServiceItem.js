import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Button from '../atoms/Button';
import Paragraph from '../atoms/Paragraph';
import Authors from '../atoms/Project/Authors';
import Title from '../atoms/Project/Title';
import SquareGradient from '../atoms/SquareGradient';

const StyledWrapper = styled.div`
    position: relative;
    display:flex;
    flex-direction:column;
    color:white;
    width:280px;
    margin-bottom:100px;
    padding:20px 20px;
    border-radius:30px;

    > * {
        margin-bottom:10px;
    }
    
    @media  (min-width: ${({ theme }) => theme.media700}) {
        margin:50px 100px 100px 100px;
        width:340px;
    }

    @media  (min-width: ${({ theme }) => theme.media1000}) {

    }

`




const ProjectItem = ({item}) => {
    let {title,slug, authors,contributors, short_description} = item
    const [data,setData] = useState({width:0,height:0})

    const ProjectItemRef = useRef(null)

useEffect(()=>{
    setData({width:ProjectItemRef.current.clientWidth +60 ,height:ProjectItemRef.current.clientHeight+78})

},[ProjectItemRef])

    return (
        <StyledWrapper ref={ProjectItemRef}>
            <Title text={title}/>
            <Authors text={'Authors: '} authors={authors} />
            <Authors text={"Contributors: "} authors={contributors}/>
            <Paragraph secondary text={short_description} />
            <Button slug={slug} text={"Read More"}/>
            <SquareGradient data={data} />
            
        </StyledWrapper>
    )
  }
  
  export default ProjectItem


