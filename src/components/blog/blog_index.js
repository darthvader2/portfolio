import React from 'react';
import styled  from 'styled-components';
import { Container } from '../container';
import CardComponent from './blogcard';
const Heading=styled.div`
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
color:#5A2DF2;


> span{
    color:"red";
}
 
`;


const BlogWrapper = styled.div`
display: grid;
height: auto;
width: auto;
padding: 50px;
background-color:#1f1f1f;
`
;

const Wrapper = styled.div`
display: grid;

grid-template-columns: repeat(auto-fit,
minmax(12rem,16rem));
gap:5rem;
justify-content: center;
`;

function BlogWrap(){
    return(
            <BlogWrapper>

            <Heading>Writings</Heading>
            <Wrapper>
                <CardComponent/>
            </Wrapper>
            </BlogWrapper>
    )
}

export default BlogWrap;