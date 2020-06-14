import React from 'react';
import './App.css';
import HeadingWrap from '../components/headingwrap';
import Logo from '../components/headingwrap/Logo';
import { ThemeProvider } from "styled-components";
import DarkMode from '../components/theme/themes';
import BodyTheme from '../components/global-components/modes'
function App() {
  return (
    <ThemeProvider theme = {DarkMode}>
    <BodyTheme/>
        <Logo/>
      <HeadingWrap></HeadingWrap>
    
  
    </ThemeProvider>
    );
}

export default App;
