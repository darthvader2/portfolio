import React from 'react';
import './App.css';
import styled from 'styled-components'

const Appwrapper=styled.div`
  width : 100vw;
  height :100vh;
  background-color:black;
  background-size:cover;
  background-repeat:no-repeat;
  display:flex ;
  `;

const Tabsection=styled.div`
  height :100vh;
  width:30vh;
  background-color:white;
  position:right;
  `;

  const Heading = styled.h1`
  width: 100%;
  font-style: normal;
  position: absolute;
  align:center;
  font-weight: 900;
  font-size: 33px;
  line-height: 129.69%;
  letter-spacing: 0.03em;
  color:white;
`;

        





function App() {
  return (
    <Appwrapper>
      <Heading>
        Hello There , See you soon...!
      </Heading>
      
    </Appwrapper>
  );
}

export default App;
