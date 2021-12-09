import styled from 'styled-components';
import React from 'react';
import { SectionContainer } from './SectionStyles';


export const AboutText=styled.div`
max-width: 35em;
color:#5A2DF2;
margin:0;
font-weight:400;
line-height:55px;
color:#e2dada;
font-family : 'Space Mono', monospace;
font-size:1.7em;

@media(max-width:800px){
    font-size:1.5rem;
    max-width: 17em;
    line-height: 1.6em;
    margin: 0 auto;

}



`;
const Heading=styled.div`
flex:1;
display:flex;
flex-direction:column;
justify-content:center;
color:rgb(51, 255, 211);
font-family : 'Space Mono', monospace;
font-size:4rem;
font-weight:600;

@media(max-width:800px){
    font-size:2rem;
}

`;



function AboutWrap(){    
    return(
        
    <SectionContainer>
        
        
        <Heading>About</Heading>
        <AboutText>
        <p>I am currently pursuing master's in statistics and machine learning  at 
        Linkoping university in sweden,even though currently pursuing field of
        data analytics ,I like to keep myself busy with web development projects.</p>
        </AboutText>

    </SectionContainer>
        

    
)
    };

export default AboutWrap;
