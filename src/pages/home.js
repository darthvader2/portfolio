import   React from 'react';
import HeadingWrap from '../styles/Headingwrap.js';
import AboutWrap from '../styles/Aboutwrap.js'
import Footer from '../styles/footer'
import BlogWrap from '../styles/Blogwrap';
  
function Home() {
  return (
    <div>
      <HeadingWrap/>
      <AboutWrap/>
      <BlogWrap/>
      <Footer/>
      </div>
    );
}

export default Home;
