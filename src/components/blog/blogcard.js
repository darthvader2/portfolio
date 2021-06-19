import React from 'react';
import styled from 'styled-components';
import gif from '../../images/cat.gif';

const Card=styled.div`
background-color:#262626;
overflow: hidden;
box-shadow: 0 2px 5px;
display: flex;
flex-direction:column;
justify-content: space-between;
cursor: pointer;
transition : transform 200ms ease-in ;
border-radius: 5px;

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
const CardBody=styled.div`
color:white;
`;
const CardImg = styled.div`
    background-image: url(${gif});
    height:8rem;
    width:100%;
    object-fit: cover;
    background-size: 100% 100%;

`;



function CardComponent(){
return(
<Card>
    <CardImg/>
        <CardTitle><h2>Coming soon!</h2></CardTitle>
            <CardDesc>
            I add in one single beaten egg from a bowl, and boom! 
            The center starts to steam violently
            </CardDesc>
        

</Card>

);
}

export default CardComponent;