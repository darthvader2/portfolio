import React from 'react';
import styled  from 'styled-components';
import BlogCard from './blogcard';
import { SectionContainer } from './SectionStyles';
const Heading=styled.div`
flex:1;
display:flex;
flex-direction:column;
justify-content:center;
color:rgb(255, 148, 148);
font-family : 'Space Mono', monospace;
font-size:4rem;
font-weight:600;

@media(max-width:800px){
    font-size:2rem;
}

`;


const Wrapper = styled.div`
display: grid;
justify-content: left;
`;


function BlogWrap(){
    return(
            <SectionContainer>

            <Heading>Works & Writings</Heading>
            <Wrapper>
            <BlogCard title = "!!! Current production is not optimized"/>
           </Wrapper>
            </SectionContainer>
    )
}

export default BlogWrap;