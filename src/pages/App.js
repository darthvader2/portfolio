import React from 'react';
import './App.css';
import HeadingWrap from '../components/headingwrap';
import { ThemeProvider } from "styled-components";
import DarkMode from '../components/theme/themes';
import BodyTheme from '../components/global-components/modes'
import GlobalFonts from '../fonts/fonts'

function App() {
  return (
    <ThemeProvider theme = {DarkMode}>
      <GlobalFonts/>
    <BodyTheme/>
        
        
      <HeadingWrap></HeadingWrap>
    
  
    </ThemeProvider>
    );
}

export default App;
