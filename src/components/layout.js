import  React, { useEffect, useRef } from "react"
import styled, {ThemeProvider} from 'styled-components'
import Header from "src/components/organisms/Header/Header"
import {theme} from 'src/theme/theme'
import Footer from "src/components/organisms/Footer/Footer"
import Aside from "src/components/organisms/Aside/Aside"
import Baner from "src/assets/images/interface/baner.png"
import "./layout.css"

const StyledWrapperMainAside = styled.div`
  display:flex;
  flex-direction:row;
  position: relative;
  margin-top:85px;

  @media (min-width: ${({ theme }) => theme.media.media700}) {
    margin-top:110px;
    }

`
const Main = styled.main`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin:0 auto;
    margin-bottom:100px;
    padding:0 20px;
    width:100%;
    min-height:120vh;



    @media (min-width: ${({ theme }) => theme.media.media1000}) {
      align-items:flex-start;
      width:80%;
    }
    @media (min-width: ${({ theme }) => theme.media.media1400}) {
      margin-left: 80px;
      align-items:flex-start;
    }

`
const Img = styled.img`
  display:none;
  margin-top:60px;
  width:100%;

  @media (min-width: ${({theme})=> theme.media.media1400}){
    display:block;
    margin-top:  calc(40px + (60 - 40) * ((100vw - 1366px) / (1900 - 1366)));          
  }
`

export function Layout ({ children, location})  {
  const footerRef = useRef(null)
  const mainRef = useRef(null)
  const asideRef = useRef(null)

  const isAppear = location.pathname === "/"

  const  listenToScroll = () => {
    let lastKnownScrollPosition = window.scrollY;
    let mainRefTop = mainRef.current.getBoundingClientRect().top
    let footerRefTop = footerRef.current.getBoundingClientRect().top - window.innerHeight

    if(footerRefTop < 0 ){
      asideRef.current.style.top = `${footerRefTop}px`
    }
    else if(mainRefTop < 0 ){
      asideRef.current.style.position = "fixed"
      asideRef.current.style.top = "20px"
    
    }else if(mainRefTop > 0){
      asideRef.current.style.position = "absolute"
    }
    

  }

  useEffect(()=>{
    window.addEventListener('scroll', ()=>listenToScroll())
    return() => {
        window.addEventListener('scroll', ()=>listenToScroll())
    }
})



  return (
        <ThemeProvider theme={theme}>
            <Header location={location} />
            {isAppear && <Img src={Baner} alt={"baner - podaruj chwilę dla siebie"}/> }
            <StyledWrapperMainAside>
              <Main ref={mainRef}>
                  {children}
              </Main>
              <Aside ref={asideRef} location={location} />
            </StyledWrapperMainAside>
            <Footer ref={footerRef}/>
        </ThemeProvider>
  )
}

export default Layout
