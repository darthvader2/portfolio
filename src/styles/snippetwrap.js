import React from 'react';
import styled  from 'styled-components';
import { SectionContainer } from './SectionStyles';

const Heading=styled.div`
flex:1;
display:flex;
flex-direction:column;
justify-content:center;
color:rgb(184, 122, 255);

font-family : 'Space Mono', monospace;
font-size:4rem;
font-weight:600;
line-height:1.2em;
color:rgb(184, 122, 255);


> span{
    color:"red";
}

@media(max-width:800px){
    font-size:2rem;
}

 
`;



const Wrapper = styled.div`
display: grid;

grid-template-columns: repeat(auto-fit,
minmax(12rem,16rem));
gap:5rem;
justify-content: center;
`;

function SnippetWrap(){
    return(
            <SectionContainer>

            <Heading>Snippets</Heading>
            <Wrapper>
        <a href = "/snippets">Snippets</a>
        
            </Wrapper>
            </SectionContainer>
    )
}

export default SnippetWrap;