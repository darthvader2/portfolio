import styled from 'styled-components';
import gif from '../images/cat.gif';
import React from 'react';


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
animation-name: fadeIn;
    animation-duration:4s ;
    @keyframes fadeIn{
        from{
            opacity: 0;
            transform: translateY(100px);
        }
        to{
            opacity: 1;

        }
    }
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



function AboutWrap(){    
    return(
        
    <AboutWrapCont>
        
        <AboutContent>
        
        <AboutHeading>
        <GifDiv></GifDiv>
        </AboutHeading>
        <AboutText>
        <p>I am currently pursuing master's in statistics and machine learning  at 
        Linkoping university in sweden,even though currently pursuing field of
        data analytics ,I like to keep myself busy with web development projects.</p>
        </AboutText>
         

        </AboutContent>

    </AboutWrapCont>
        

    
)
    };

export default AboutWrap;
