import React from 'react';
import './App.css';
import HeadingWrap from '../components/headingwrap';
import Layout from '../components/Layout'
import Logo from '../components/Logo';

     
function App() {
  return (
    <Layout>
      <Logo/>
      <HeadingWrap></HeadingWrap>
    </Layout>
    );
}

export default App;
