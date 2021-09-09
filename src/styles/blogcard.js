import React from 'react';
import styled from 'styled-components';

const Card=styled.div`
overflow: hidden;
display: flex;
flex-direction:column;
justify-content: space-between;
cursor: pointer;

font-family : 'Space Mono', monospace;

:hover{

 transform : rotateX(120);
 
 
}

`;

const BlogCardTitle=styled.div`
font-size: 1.2rem;
  background: -webkit-linear-gradient(#4158D0, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
>a{
    text-decoration: none;
}
`;




function BlogCard(props){
return(
<Card>
    
        <BlogCardTitle><a href = "/quotes"><h2>{props.title}</h2></a></BlogCardTitle>
            
        

</Card>

);
}

export default BlogCard;