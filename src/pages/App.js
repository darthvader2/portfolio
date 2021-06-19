import   React from 'react';
import './App.css';
import HeadingWrap from '../components/headingwrap';
import AboutWrap from '../components/aboutwrap'
import { ThemeProvider } from "styled-components";
import DarkMode from '../components/theme/themes';
import BodyTheme from '../components/global-components/modes'
import CodeWrap from '../components/code-wrap'
import Footer from '../components/footer'
import BlogWrap from '../components/blog/blog_index';


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
