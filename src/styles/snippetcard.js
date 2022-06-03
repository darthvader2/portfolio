import React from 'react';
import styled from 'styled-components';

const Card=styled.div`
background-color:white;
overflow: hidden;
box-shadow: 0 2px 5px;
display: flex;
flex-direction:column;
justify-content: space-between;
cursor: pointer;
transition : transform 200ms ease-in ;
border-radius: 5px;
width: 20rem;
font-family : 'Space Mono', monospace;

:hover{

 transform : rotateX(120);
 
 
}

`;
const CardTitle=styled.div`
font-size: 1.5rem;
  background: -webkit-linear-gradient(#4158D0, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
padding:1rem;
>a{
    text-decoration: none;
}
`;
const CardDesc=styled.div`
color:white;
padding: 0 .6rem;
margin: 1rem;
`;




function CardComponent(){
return(
<Card>
    
        <a href = "/quotes"><h2>Quotes</h2></a>
            <CardDesc>Random quote generator</CardDesc>
            
        

</Card>

);
}

export default CardComponent;