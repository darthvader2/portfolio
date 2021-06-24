import   React from 'react';
import HeadingWrap from '../styles/Headingwrap.js';
import AboutWrap from '../styles/Aboutwrap.js'
import { ThemeProvider } from "styled-components";
import DarkMode from '../components/theme/themes';
import BodyTheme from '../components/global-components/modes'
import Footer from '../styles/footer'
import BlogWrap from '../styles/Blogwrap';


function App() {
  return (
    <ThemeProvider theme = {DarkMode}>
      
    <BodyTheme/>
        
        
      <HeadingWrap/>
      <AboutWrap/>
      <BlogWrap/>
      <Footer/>
      
    </ThemeProvider>
    );
}

export default App;
