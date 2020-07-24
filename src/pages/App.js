import React from 'react';
import './App.css';
import HeadingWrap from '../components/headingwrap';
import AboutWrap from '../components/aboutwrap'
import { ThemeProvider } from "styled-components";
import DarkMode from '../components/theme/themes';
import BodyTheme from '../components/global-components/modes'
import PGWrap from '../components/playgroundwrap'


function App() {
  return (
    <ThemeProvider theme = {DarkMode}>
      
    <BodyTheme/>
        
        
      <HeadingWrap/>
      <AboutWrap/>
      
    </ThemeProvider>
    );
}

export default App;
