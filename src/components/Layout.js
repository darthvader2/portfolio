import styled, { keyframes } from "styled-components/macro";



const FadeOut = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

const Layout = styled.div`
    
    animation: ${FadeOut} 0.6s 0.3s ease-in-out forwards;
    max-height : 100vh;
    padding:0;
    margin :auto;
    background-color:black;
    overflow-x:hidden;


  
  
`;

export default Layout;