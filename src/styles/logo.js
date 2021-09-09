import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const LogoTitle = styled.h2`
  position: relative;
  color:#5A2DF2;
  font-family : 'Space Mono', monospace;
  padding: 2rem 2rem;
`;

function Logo() {
  return (
      <Link path = "/" style={{ textDecoration: 'none'}}>
  <LogoTitle>Varshith.</LogoTitle>
  </Link>
  
  )}

export default Logo; 