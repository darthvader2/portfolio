import styled from 'styled-components';
import git from '../../images/social-icons/git.png';
import twitter from '../../images/social-icons/twitter.png';
import linkedin from '../../images/social-icons/linkedin.png';


export const HeadingElements = styled.div`
display :flex;
align-items:center;
color:white;
padding:0;

`;

export const Line = styled.div`
height:2px;
width:200px;
background-color:#CE2020;
margin-left:5%
`;
export const HeadingWrapCont = styled.div`
    width: 100%;
    margin :auto;
    flex-wrap:wrap;
    padding-top:100px;
    height :auto;
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

