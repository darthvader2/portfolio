import styled from 'styled-components';
import git from '../../images/social-icons/git.png';
import twitter from '../../images/social-icons/twitter.png';
import linkedin from '../../images/social-icons/linkedin.png';
export const breakpoints = {
    mobileMin: "480px",
    mobileMax: "959px",
    tabletMin: "960px",
    tabletMax: "1199px",
    desktopMin: "1200px"
  };

export const HeadingElements = styled.div`
display :flex;
align-items:center;
color:white;
padding:0;

`;

export const Line = styled.div`
height:2px;
width:300px;
background-color:#CE2020;
margin-left:5%
`;
export const HeadingWrapCont = styled.div`
    background: black;
    padding-top: 40px;
    height :100vh;
    background-position: 0 0;
    background-repeat: no-repeat;
`;

export const HeadingMain=styled.div`
font0family:Roboto;
font-weight: 900;
font-size: 5vw;
line-height: 129.69%;
letter-spacing: 0.03em;
margin-bottom: 0px;
margin-top:5%;
color:white;
margin-left:5%;
posiotion:absolute;

@media (min-width: ${breakpoints.mobileMax}) {
    font-size: 60px;
    margin-bottom: 0;
    margin-left: 50px;
}
>span {
    color:#CE2020;
}
`;


export const SocialCont = styled.div`
    width: auto;
    height: auto;
    display: flex;
    margin-left: 20px;
    
    & .git{
        background-image : url(${git})
    } 

    & .twitter{
        background-image:url(${twitter})
    }

    & .linkedin{
        background-image:url(${linkedin})
    }
    `;

    export const Social = styled.div`
    width: 30px;
    height: 30px;
    margin: 0 15px;
    background-repeat: no-repeat;
    background-size: 30px 30px;
    background-position: center center;
    transition-duration: 2s;
    :hover {
        background-size: 30px;
    }
`;

