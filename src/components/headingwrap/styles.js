import styled from 'styled-components';
import git from '../../images/social-icons/git.png';
import twitter from '../../images/social-icons/twitter.png';
import linkedin from '../../images/social-icons/linkedin.png';
import Header_icon from '../../images/Header_icon.png'

export const HeadingWrapCont = styled.div`
place-items :center;
display:grid;
margin-top:6rem;
animation:fadeIn 2s ease-in ;
@keyframes fadeIn{
    from{
        opacity:0;
            }
    to{
        opacity:1;
    }
}



`;

export const HeadingMain=styled.div`
font-family: 'Neue Machina Ultrabold';
font-size: 8vw;
line-height: 129.69%;
letter-spacing: 0.03em;
color:#5A2DF2;
text-align:center;
padding:30px;


@media(max-width:800px){
    font-size:4em;
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

background-image  : url($Header_icon);
height : 300px;
width : 300px;
> span{
    color:#5A2DF2;
}

`;

export const HeadingElements = styled.div`
    height:auto;
    display :flex;
    align-items:center;
    padding:6%;
    `;

export const SocialCont = styled.div`
    width: auto;
    height: auto;
    display: flex;
    
    
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

 