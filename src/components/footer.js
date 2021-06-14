import styled from 'styled-components';
import React from 'react';


const Foot = styled.div`
width: 100%;
height: 12rem;
background-color: #262626;
margin-top:auto;
display: flex;
align-items: center;
justify-content:space-evenly;
`;

const FooterMain=styled.div`
font-family : 'Space Mono', monospace;
font-size: 3rem;
line-height: 129.69%;
letter-spacing: 0.03em;
color:#5A2DF2;
font-weight:700;

`;


function Footer() {
    return(
        <Foot>
            <FooterMain>Varshith.</FooterMain>
            </Foot>
    )
};

export default Footer