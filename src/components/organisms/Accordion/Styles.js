import Link from 'next/link'
import styled, { css, keyframes } from 'styled-components';

export const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items:center;
  width:100%;

    ${({first})=>

      first && css`
          margin-bottom: calc(11px + (20 - 11) * ((100vw - 300px) / (1900 - 300)));

          @media  (min-width: ${({ theme }) => theme.media.media700}) {
            /* width:calc(320px + (426 - 320) * ((100vw - 300px) / (1900 - 300))); */
            max-width: 571px;
          }
      `}

    ${({second})=>

      second && css`
          margin-bottom: calc(60px + (90 - 60) * ((100vw - 300px) / (1900 - 300)));

          @media  (min-width: ${({ theme }) => theme.media.media700}) {
            width:calc(571px + (821 - 571) * ((100vw - 300px) / (1900 - 300)));
          }

          @media  (min-width: ${({ theme }) => theme.media.media1400}) {
            width:calc(500px + (821 - 500) * ((100vw - 1366px) / (1900 - 1366)));
          }
      `}

`;

export const StyledSummary = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items:center;
  text-align:center;
  border: 2px solid ${({theme})=>theme.colours.accent.default};
  background-color:  ${({theme})=>theme.colours.accent.default};
  color:  ${({theme})=>theme.colours.second.default};


  padding: 10px 20px; 
  margin-bottom:calc(12px + (16 - 12) * ((100vw - 300px) / (1900 - 360)));
  font-size:20px;
  font-weight:500;
  width:100%;
  height: calc(67px + (80 - 67) * ((100vw - 300px) / (1600 - 300)));


  @media  (min-width: ${({ theme }) => theme.media.media1400}) {
    height:calc(60px + (80 - 60) * ((100vw - 1366px) / (1900 - 1366)));
    margin-bottom:calc(12px + (16 - 12) * ((100vw - 1366px) / (1900 - 1366)));
  }

  :hover{
    cursor: pointer;
    background-color: ${({theme})=>theme.colours.accent.default};
  }
`;


const detailsAppear = keyframes`
  0% {
    opacity:0;
    margin-top: -30px;
  }
  100% {
    opacity:1;
    margin-top: 0px;
  }
`
const detailsDisAppear = keyframes`
  0% {
    opacity:1;
    margin-top: 0px;
  }
  100% {
    opacity:0;
    margin-top: -30px;
  }
`

export const StyledDetails = styled.div`
  position:relative;
  display: flex;
  justify-content: space-between;
  align-items:center;
  background-color:  ${({theme})=>theme.colours.grey};
  width:100%;
  text-decoration:none;

  :hover {
    background-color:  ${({theme})=>theme.colours.accent.hover};
  }
  p{
    font-weight:500;
    color:  ${({theme})=>theme.colours.second.default};
  }
  a{
    font-weight:900;
    text-decoration:none;
    color: ${({theme})=>theme.colours.second.default};
  }


  ${({first})=>
    first && css`
      background-color:  ${({theme})=>theme.colours.grey};
      padding: 10px 20px; 
      margin-bottom: calc(10px + (13 - 10) * ((100vw - 300px) / (1900 - 300)));
      height: calc(45px + (60 - 45) * ((100vw - 300px) / (1600 - 300)));

      :active{
        transform: scale(0.95);
      }

      p{
        font-size: calc(15px + (20 - 15) * ((100vw - 300px) / (1600 - 300)));

        @media  (min-width: ${({ theme }) => theme.media.media1400}) {
          font-size:calc(15px + (20 - 15) * ((100vw - 1366px) / (1900 - 1366)));
        }
      }
      

      a{
        font-size: calc(12px + (16 - 12) * ((100vw - 300px) / (1600 - 300)));
        @media  (min-width: ${({ theme }) => theme.media.media1400}) {
          font-size:calc(12px + (16 - 12) * ((100vw - 1366px) / (1900 - 1366)));
        }
      }

      @media  (min-width: ${({ theme }) => theme.media.media1400}) {
        margin-bottom:calc(8px + (13 - 8) * ((100vw - 1366px) / (1900 - 1366)));
        height:calc(45px + (60 - 45) * ((100vw - 1366px) / (1900 - 1366)));
      }
    `}

  ${({second})=>
    second && css`
      align-items:flex-start;
      text-align:left;
      padding: 13px 0px 50px 25px;
      margin-bottom:30px;


      h3{
        margin-bottom:13px;
        font-size: calc(20px + (27 - 20) * ((100vw - 300px) / (1900 - 360)));
      }

      > :nth-child(1){

        p{

        font-size: calc(13px + (20 - 13) * ((100vw - 300px) / (1900 - 300)));
        }
      }
      > :nth-child(2){
        display:flex;
        flex-direction:column;
        justify-content:space-between;
      }

      a{
        position:absolute;
        bottom:16px;
        right:calc(35px + (60 - 35) * ((100vw - 360px) / (1900 - 360)));
        font-size:calc(20px + (27 - 20) * ((100vw - 360px) / (1900 - 360)));
      }
      
      ${({isActive, key}) => 
        isActive ? css`
          animation: 0.5s ${detailsAppear} ease-out forwards;
          animation-delay: ${key * 1}s;
        `
        :
        css`
            animation: 0.5s ${detailsDisAppear} ease-out forwards;
            animation-delay: ${key * 1}s;
          `
        }

    @media  (min-width: ${({ theme }) => theme.media.media1400}) {

      h3{
        font-size:calc(21px + (27 - 21) * ((100vw - 1366px) / (1900 - 1366)));
      }

      a{
          font-size:calc(18px + (27 - 18) * ((100vw - 1366px) / (1900 - 1366)));
        }
      > :nth-child(1){
          p{
            line-height:17px;
            font-size:calc(13px + (20 - 13) * ((100vw - 1366px) / (1900 - 1366)));
          }

        }
      }
    `}

  @media  (min-width: ${({ theme }) => theme.media.media700}) {

    > :first-child p{
        margin-right:30px;
      }
    > :nth-child(1){
        margin-right:30px;

        > *{
          margin-bottom:20px;
        }
      }
  }
`;

export const StyledCloser = styled.button`
  width: 100%;
  height: 65px;
  border:none;
  outline:none;
  background-color: ${({theme})=>theme.colours.accent.default};
  :hover{
    cursor:pointer;
  }

  @media  (min-width: ${({ theme }) => theme.media.media1400}) {

    margin-top: -10px;
    height:calc(50px + (65 - 50) * ((100vw - 1366px) / (1900 - 1366)));
    svg{
      width:25px;
    }
  }
`;

export const StyledTab = styled.div`
  position: relative;
  opacity:50%;
  width: calc(200px + (318 - 200) * ((100vw - 300px) / (1900 - 300)));
  margin-bottom: 36px;

  :hover{
    opacity:100%;
    cursor: pointer;
  }

  h4{
    position: absolute;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: calc(22px + (30 - 22) * ((100vw - 300px) / (1900 - 300)));
    color: ${({theme}) => theme.colours.white};
  }

  ${({isActive}) => 
    isActive && css`
      opacity:100%;
  `}

  @media  (min-width: ${({ theme }) => theme.media.media1400}) {
    width:calc(200px + (318 - 200) * ((100vw - 1366px) / (1900 - 1366)));

    h4{

      font-size: calc(18px + (30 - 18) * ((100vw - 300px) / (1900 - 300)));

    }
  }
`; 

export const StyledWrapperTimeAndPrice = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    width: calc(90px + (140 - 90) * ((100vw - 360px) / (1900 - 360)));
    margin-left:15px;
    margin-right: calc(14px + (46 - 14) * ((100vw - 360px) / (1900 - 360)));
    margin-top: calc(5px + (35 - 5) * ((100vw - 360px) / (1900 - 360)));

    svg { 
      width: calc(18px + (40 - 18) * ((100vw - 360px) / (1900 - 360)));
    }

    p{
       font-size: calc(14px + (23 - 14) * ((100vw - 360px) / (1900 - 360)));
    }
    > * {
        margin-bottom: calc(5px + (25 - 5) * ((100vw - 360px) / (1900 - 360)));
    }

    @media  (min-width: ${({ theme }) => theme.media.media1400}) {
      margin-right: calc(14px + (46 - 14) * ((100vw - 1366px) / (1900 - 1366)));
        
        p{
          font-size:calc(14px + (23 - 14) * ((100vw - 1366px) / (1900 - 1366)));
        }
        svg{
          width:calc(22px + (40 - 22) * ((100vw - 1366px) / (1900 - 1366)));
        }
        > * {
            margin-bottom: calc(7px + (25 - 7) * ((100vw - 1366px) / (1900 - 1366)));
        }
      }


`