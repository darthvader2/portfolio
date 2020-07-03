import styled from 'styled-components';
import git from '../../images/social-icons/git.png';
import twitter from '../../images/social-icons/twitter.png';
import linkedin from '../../images/social-icons/linkedin.png';
import codesectionimage from '../../images/codesection_component.png';

export const HeadingWrapCont = styled.div`
width: auto;
display:inline-flex;;
flex-wrap:wrap;
height :50vh;
margin-top:30vh;
@media(max-width:800px){
    margin-top:20vh;
}
`;

export const HeadingMain=styled.div`
font-family: Neue Machina Ultrabold;
font-size: 8vw;
line-height: 129.69%;
letter-spacing: 0.03em;
posiotion:absolute;
color:#5A2DF2;
margin-left:5%;
margin-top:2%;

@media(max-width:800px){
    font-size:5em;
    margin-top:0;
}
`;

export const CodeSection=styled.div`
    height:320px;
    width:320px;
    background-repeat:no-repeat;
    background-size:320px 320px;
    background-image:url(${codesectionimage});
    margin-left:10%;
    
    `;

export const HeadingElements = styled.div`
    height:auto;
    display :flex;
    align-items:center;
    padding:0;
    `;

export const SocialCont = styled.div`
    width: auto;
    height: auto;
    display: flex;
    margin-left: 7%;
    
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

