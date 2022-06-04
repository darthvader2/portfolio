import React from "react";
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
max-width: 1260px;
padding : 5%;
margin-top:5%;                                                                         
margin-right:auto;
margin-left:auto;
background-color:#000000;
display:flex;
flex-wrap:wrap;
`

function Snippethome(){

return(

    <ThemeProvider theme = {DarkMode}>
<Logo/>
<Heading>Snippets</Heading>
<SnippethomeWrap>

    <CardComponent/>

    
    


    </SnippethomeWrap>
<Footer/>
</ThemeProvider>

);
}

export default Snippethome;