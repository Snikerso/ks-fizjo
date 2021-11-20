import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: "first";
        font-weight:300;
        src: url("/assets/fonts/Rajdhani-Light.ttf");
    } 
    @font-face {
        font-family:  "first";
        font-weight:400;
        src: url("/assets/fonts/Rajdhani-Regular.ttf");
    }
    @font-face {
        font-family:  "first";
        font-weight:500;
        src: url("/assets/fonts/Rajdhani-Medium.ttf");
    }
    @font-face {
        font-family:  "first";
        font-weight:700;
        src: url("/assets/fonts/Rajdhani-SemiBold.ttf");
    }
    @font-face {
        font-family:  "first";
        font-weight:900;
        src: url("/assets/fonts/Rajdhani-Bold.ttf");
    }
    @font-face {
        font-family:  "first";
        font-weight:300;
        src: url("/assets/fonts/Rajdhani-Light.ttf");
    }
    @font-face {
        font-family: "second";
        font-weight: 300;
        src: url("/assets/fonts/JosefinSans-Light.ttf");
    }
    
    *,*::before,*::after{
        box-sizing:border-box;
        margin:0;
    }

    html {
        font-size: 62.5%; 
    }
    body{
        font-family: "first";
        position: relative;
        background-color:white;
        font-size:1.6rem;
        margin:0;    
        
    }
`;
export default GlobalStyles