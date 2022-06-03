import React from 'react';
import styled from 'styled-components';

const Card=styled.div`
box-sizing:border-box;
width:370px;
height:190px;
border-color:white;
border-style:solid;
border-width:1px;
border-radius:15px;
padding:1rem;
margin:15px;
`;
const CardTitle=styled.a`
font-size: 1.5rem;
color:white;
font-family : 'Space Mono', monospace;
`;
const CardDesc=styled.div`
color:white;
padding: 0 .6rem;
margin: 1rem;
`;




function CardComponent(){
return(
<Card>
    
        <CardTitle>Cross entropy and emperical risk using KKNN</CardTitle>
    
            
        

</Card>

);
}

export default CardComponent;