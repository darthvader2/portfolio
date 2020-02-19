import styled from 'styled-components';
import Heading from '../heading-style';


export const HeadingElements = styled.div`
display :flex;
align-items:center;
color:white;
padding:0;

`;

export const Line = styled.div`
height:2px;
width:100px;
background-color:white;
`;
export const HeadingWrapCont = styled.div`
    background: black;
    padding-top: 40px;
    height :100vh;
    width:100vw;
    background-position: 0 0;
    background-repeat: no-repeat;
`;

export const HeadingMain=styled.div`
font-weight: 900;
font-size: 5vw;
line-height: 129.69%;
letter-spacing: 0.03em;
margin-bottom: 0px;
margin-top: 0px;
color:white;
padding-left:50px;
>span {
    color:#CE2020;
}
`;
