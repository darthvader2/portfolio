import React from 'react';
import styled from 'styled-components';
const LogoTitle = styled.h2`

color:#5A2DF2;
  font-family : 'Space Mono', monospace;
  text-decoration: none;
  padding-left : 2rem;
  text-decoration:none;
  `;

const LogoWrap = styled.div`
position:sticky;
top:0;
background-color:#1c1c1c;
padding:.4rem;
box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 1);
text-decoration:none;
`;

const Homeroute = styled.a`
text-decoration:none;
color:inherit;
`
function Logo() {
  return (
   
    <LogoWrap>

<LogoTitle><Homeroute href = '/'>Varshith.</Homeroute></LogoTitle>

  </LogoWrap>
  
  )}

export default Logo; 