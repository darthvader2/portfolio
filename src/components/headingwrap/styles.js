import styled from 'styled-components';
import git from '../../images/social-icons/git.png';
import twitter from '../../images/social-icons/twitter.png';
import linkedin from '../../images/social-icons/linkedin.png';
import Header_icon from '../../images/Header_icon.png'

export const HeadingWrapCont = styled.div`
place-items :center;
display:grid;
`;

export const HeadingMain=styled.div`
font-family : 'Space Mono', monospace;
font-size: 8vw;
line-height: 129.69%;
letter-spacing: 0.03em;
color:#5A2DF2;
font-weight:700;


@media(max-width:800px){
    font-size:3.5em;
}
@keyframes fadeIn{
    from{
        opacity:0;
            }
    to{
        opacity:1;
    }
}
    

`;


export const HeadingIntro=styled.div`
    
    font-family : 'Space Mono', monospace;
    color:white;
    font-size:1.5em;
    padding:2em;
    
    @media(max-width:800px){
    font-size:.9em;
}

`;


export const HeadingElements = styled.div`
    height:auto;
    display :flex;
    align-items:center;
    color:white;
    font-family: 'Space Mono', monospace;
    
    `;

export const SocialCont = styled.div`
    width: auto;
    height: auto;
    display: flex;
    > a{
        text-decoration:none;
        padding:5px;
    }
    > span{
        padding:5px;
    }
    
    `;


export const Social = styled.div`
    width: 30px;
    height: 30px;
    margin: 0 60px;
    position:relative;
    background-repeat: no-repeat;
    background-size: 30px 30px;
    background-position: center center;
    transition-duration: 2s;
    :hover {
        background-color: #5A2DF2;
    }
    
`;

 