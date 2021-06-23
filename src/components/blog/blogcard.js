import React from 'react';
import styled from 'styled-components';
import gif from '../../images/cat.gif';

const Card=styled.div`
overflow: hidden;
box-shadow: 0 7px 10px;
display: flex;
flex-direction:column;
justify-content: space-between;
cursor: pointer;
transition : transform 200ms ease-in ;
border-radius: 5px;
width: 20rem;
background-color: #4158D0;
background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);

`;
const CardTitle=styled.div`
color:white;
padding:1rem;
`;
const CardDesc=styled.div`
color:white;
padding: 0 .6rem;
margin: 1rem;
`;




function CardComponent(){
return(
<Card>
    
        <CardTitle><h2>Coming soon!</h2></CardTitle>
            <CardDesc>
            I add in one single beaten egg from a bowl, and boom! 
            The center starts to steam violently
            </CardDesc>
        

</Card>

);
}

export default CardComponent;