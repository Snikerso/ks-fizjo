import * as React from "react"
import styled from "styled-components"
import FacebookEmbadedBg from "/src/components/atoms/interface/FacebookEmbadedBg/FacebookEmbadedBg"

const StyledWrapper = styled.div`


  position: relative;
  height:270px;
  iframe{
    /* width:80%; */
    /* width:100%; */
    /* overflow:scroll; */
    height:400px;
    /* width:340px; */

  }
`

const FacebookEmbaded = () => {

  return (
  <>
        
      <FacebookEmbadedBg/>
      <StyledWrapper>
        <iframe src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/fizjoterapia.kamilasplocharska&tabs=timeline&width=270&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=332450868209542" width="270"  scrolling="yes" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
      </StyledWrapper>
      </>
  )
}

export default FacebookEmbaded

