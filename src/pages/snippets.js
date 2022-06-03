import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import Logo from "../styles/logo";
import DarkMode from '../components/theme/themes';
import Footer from "../styles/footer";
import CardComponent from "../styles/snippetcard";
const Heading=styled.div`
flex:1;
display:flex;
flex-direction:column;
justify-content:center;
text-align:center;
margin-top : 5%;
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

const SnippethomeWrap=styled.div`
width:100%;
padding-right:1.5rem;
padding-left:1.5rem;
margin-right:auto;
margin-left:auto;
background-color:red;
`

function Snippethome(){

return(

    <ThemeProvider theme = {DarkMode}>
<Logo/>
<Heading>Snippets</Heading>
<SnippethomeWrap>

    <CardComponent/>
    <CardComponent/>
    <CardComponent/>
    <CardComponent/>
    <CardComponent/>
    <CardComponent/>
    <CardComponent/><CardComponent/>
    


    </SnippethomeWrap>
<Footer/>
</ThemeProvider>

);
}

export default Snippethome;