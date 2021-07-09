import React from 'react'
import styled from 'styled-components';
import Footer from '../styles/footer';
import DarkMode from '../components/theme/themes';
import BodyTheme from '../components/global-components/modes';
import { ThemeProvider } from "styled-components";
import {Container} from '../components/container';

const Quoteswrapper = styled.div`
display: grid;
margin-left: 20rem;
width: 50%;
padding: 5rem;
border-radius: 10px;
margin-top: 10%;
background-color: white;

`;

class Quotes extends React.Component{
    state = {
        loading:true
    }
    async componentDidMount(){
        const url = "https://type.fit/api/quotes"
        const response = await fetch(url)
        const data = await response.json();
        this.setState({quote:data[Math.floor(Math.random()*data.length)].text});
        console.log(data[0].text);
    };
    render(){
        return(
            <ThemeProvider theme = {DarkMode}>
                <BodyTheme/>
              <Container>  
            <Quoteswrapper><h1>Quote</h1>
            {this.state.quote?(
            <h1>{this.state.quote}</h1>
            ): (
        <h1>Loading....</h1>
            )}
            
            </Quoteswrapper>
            <Footer/>
            </Container>
            </ThemeProvider>
            
        )
    } 
}

export default Quotes