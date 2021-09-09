import styled from 'styled-components';
import React from 'react';
import Logo from './logo';

const Foot = styled.div`
width: 100%;
height: 12rem;
background-color: black;
margin-top:auto;
display: flex;
align-items: center;
justify-content:space-evenly;
`;


const today = new Date();
const Footnote=styled.div`
color: white;
`;

function Footer() {
    return(
        <Foot>
            <Footnote>&copy;{today.getFullYear()} Varshith -  Made with Coffee and React</Footnote>
            </Foot>
    )
};

export default Footer