import React from 'react';
import './App.css';
import HeadingWrap from '../components/headingwrap';
import AboutWrap from '../components/aboutwrap'
import { ThemeProvider } from "styled-components";
import DarkMode from '../components/theme/themes';
import BodyTheme from '../components/global-components/modes'
import CodeWrap from '../components/code-wrap'
import Footer from '../components/footer'


function App() {
  return (
    <ThemeProvider theme = {DarkMode}>
      
    <BodyTheme/>
        
        
      <HeadingWrap/>
      <AboutWrap/>
      
      <Footer/>
    </ThemeProvider>
    );
}

export default App;
