import styled, { css } from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media  (min-width: ${({ theme }) => theme.media.media1000}) {
    flex-direction: row;
    }
`;

export const StyledWrapperTabs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media  (min-width: ${({ theme }) => theme.media.media1000}) {
    display:flex;
    flex-direction: column;
    }

  > * {
    margin-bottom: 40px;

  }

`;

export const StyledTab = styled.div`
  position: relative;
  opacity:50%;
  width:300px;
  :hover{
    opacity:100%;
    cursor: pointer;
  }

  ${({isActive}) => 
    isActive && css`
      opacity:100%;
  `}

  h4{
    position:absolute;
    text-align:center;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    color: ${({theme})=>theme.colours.white};
    font-size: 30px;
    width:100%;
  }
`;

export const StyledWrapperList = styled.div`
  display: flex;
  flex-direction: column;
  
  @media  (min-width: ${({ theme }) => theme.media.media1000}) {
    margin-left:70px;
    }


  img{
    width:200px;
  }

  > * {
    margin-bottom: 40px;
  }

`;


export const StyledWrapperItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 615px;
  min-height:180px;
  background-color: #E8E8E8;
  padding: 20px 25px 30px 45px;



  > :first-child {
    margin-right:50px;
    p{
      margin-top:20px;
    }

  }
  > :nth-child(2) {
    display:flex;
    flex-direction: column;
    justify-content: space-around;
  }
  
  a{
    align-self:flex-end;
    text-decoration:none;
    color: ${({theme})=> theme.colours.second.default};
    font-weight:bold;
    font-size:20px;
  }
`;
