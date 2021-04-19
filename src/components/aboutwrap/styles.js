import styled from 'styled-components';
import gif from '../../images/cat.gif';


export const AboutWrapCont=styled.div`
display : flex;
height:100vh;
width:100vw;
justify-content:center;
`;

export const AboutContent=styled.div`
width:65vw;
margin:auto;
justify-content:center;
display:flex;
flex-wrap:wrap;
`;


export const GifDiv = styled.div`
    background-image: url(${gif});
    height:200px;
    width:200px;
    background-size: 100% 100%;
    border-radius:10px;
`;



export const AboutHeading=styled.div`
flex:1;
display:flex;
flex-direction:column;
justify-content:center;
padding:.5rem 1rem;
color:#5A2DF2;

font-family : 'Space Mono', monospace;
font-size:2.5em;
font-weight:600;
line-height:1.2em;
color:white;
color:#5A2DF2;


> span{
    color:"red";
}
 
`;

export const AboutText=styled.div`
flex:2;
display:flex;
flex-direction:column;
justify-content:center;
padding:.5rem 1rem;
color:#5A2DF2;
margin:0;
font-weight:400;
line-height:38px;
color:white;
font-family : 'Space Mono', monospace;
font-size:1.3em;

`;