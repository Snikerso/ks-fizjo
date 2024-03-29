import  React, { useEffect, useRef, useState } from "react"
import { useRouter } from 'next/router'
import styled, {ThemeProvider} from 'styled-components'
import Header from "../src/components/organisms/Header/Header"
import {theme} from '../src/theme/theme'
import Footer from "../src/components/organisms/Footer/Footer"
import Aside from "../src/components/organisms/Aside/Aside"
import LogoWithName from "/src/components/atoms/interface/Logo/LogoWithName"
import '../public/assets/static/layout.css';

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
    padding:0 40px;
    width:100%;
    min-height:120vh;



    @media (min-width: ${({ theme }) => theme.media.media1000}) {
      align-items:flex-start;
      width:80%;
    }
    @media (min-width: ${({ theme }) => theme.media.media1400}) {
      padding:0 100px;
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

export function MyApp ({ Component, pageProps})  {
  const footerRef = useRef(null)
  const mainRef = useRef(null)
  const asideRef = useRef(null)
  const router = useRouter()
  const isAppear = router.pathname === "/"

  const [pageLoading, setPageLoading] = useState(true);
 
  React.useEffect(() => {
      const handleComplete = () => { 
         setPageLoading(false); };

      window.addEventListener("load",handleComplete );

      // router.events.on('routeChangeStart', handleStart);
      // router.events.on('routeChangeComplete', handleComplete);
      // router.events.on('routeChangeError', handleComplete);
    }, []);

  const  listenToScroll = () => {
    let mainRefTop
    let footerRefTop 

    if(mainRef.current?.getBoundingClientRect()){
      mainRefTop = mainRef.current.getBoundingClientRect().top
      footerRefTop = footerRef.current.getBoundingClientRect().top - window.innerHeight
  
    }
    
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


// if(pageLoading){
//   return <div style={{width:"30px",height:"30px",backgroundColor:"red"}}>liad</div>
// }
  return (
    <>
        <ThemeProvider theme={theme}>
          {pageLoading ? 
            <div style={{width:"100vw",height:"100vh",position:"fixed",display:"flex",alignItems:"center",justifyContent:"center"}}>
              <LogoWithName/>
            </div>
          :(<>
            <Header location={router} />
            {isAppear && <Img src={"/assets/images/interface/baner.png"} width={'100%'} height={'fill'}  alt={"baner - podaruj chwilę dla siebie"}/> }
              <StyledWrapperMainAside>
              <Main ref={mainRef}>
                  <Component {...pageProps} />
              </Main>
              <Aside ref={asideRef} location={router} />
              </StyledWrapperMainAside>
              <Footer ref={footerRef}/>
            </>
          )
        }

        </ThemeProvider>
      </>
  )
}

export default MyApp
