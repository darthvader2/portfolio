import React from 'react';
import './App.css';
import styled from 'styled-components'
import HeadingWrap from '../components/headingwrap';
import Layout from '../components/Layout'
import { HeadingMain } from '../components/headingwrap/styles';
import Logo from '../components/Logo';
const Container = styled.div`
width: 100%;
height: 100vh;
align-items: center;
background:black;
  `;

     
function App() {
  return (
    <Layout>
      <Logo/>
      <HeadingWrap></HeadingWrap>
    </Layout>
    );
}

export default App;
