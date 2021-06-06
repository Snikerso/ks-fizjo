import React from 'react'
import styled from 'styled-components'
import IconFacebook from '../Icons/IconFacebook'
import IconInstagram from '../Icons/IconInstagram'


const SocialIcon = ({type,footer}) => {

    switch(type){
        case "FACEBOOK":
            return (
                <IconFacebook footer={footer}/>
            )
        case "INSTAGRAM":
            return(
                <IconInstagram footer={footer}/>
            )
    }

  }


  
const SocialItem = ({item,footer}) => {
    let {type} = item

    return (
        <SocialIcon type={type} footer={footer} />
    )
  }

  
export default SocialItem


