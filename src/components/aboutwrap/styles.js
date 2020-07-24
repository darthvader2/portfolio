import styled from 'styled-components';

export const AboutWrapCont=styled.div`
display : inline-block;
position:relative;
margin-left:5%;


`;

export const AboutHeading=styled.div`

font-family: 'Monument Extended',monospace;
font-size:2.5em;
font-weight:600;
line-height:1.2em;
color:white;
> span{
    color:#5A2DF2;
}

`;

export const AboutContent=styled.div`
display:flex;
flex-wrap:wrap;
padding-top:3rem;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
opacity:0.7;
font-size:1.8em;
font-weight:400;
line-height:1.8em;
letter-spacing:0.030em;
color:white;
`;