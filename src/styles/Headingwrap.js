import styled from 'styled-components';
import React from 'react';
import {Container} from '../components/container';


export const HeadingWrapCont = styled.div`
display:grid;
height:auto;
flex-wrap:wrap;
padding:8%;
animation-name: fadeIn;
    animation-duration:4s ;
    @keyframes fadeIn{
        from{
            opacity: 0;
            transform: translateY(10px);
        }
        to{
            opacity: 1;

        }
    }
    @media(max-width:800px){
        height :80vh;
    }
    `;

export const HeadingMain=styled.div`
font-family : 'Space Mono', monospace;
font-size: 6rem;
line-height: 129.69%;
letter-spacing: 0.03em;
color:#5A2DF2;
font-weight:700;


@media(max-width:800px){
    font-size:4.0rem;
}

    

`;


export const HeadingIntro=styled.div`
    
    font-family : 'Space Mono', monospace;
    color:white;
    font-size:1.5em;
    margin-top:5%
    @media(max-width:800px){
    font-size:.9em;

    @media(max-width:800px){
        display:none;
        font-size:1.6rem;
        line-height:40px;

    }
    
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
    margin-top:5%;
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
    
`;




function HeadingWrap(){
    return(
            <HeadingWrapCont>

                <HeadingMain>Hi there!,<br/>I'm Varshith.</HeadingMain>

                
        <HeadingIntro>
            Machine learning engineer based in linköping.
            </HeadingIntro>
        
                <HeadingElements>
                 

                 <SocialCont>
                     <a href = "https://github.com/darthvader2">  
                        Github <span>  /  </span>
                     </a> 
                    
                    <a href ="https://twitter.com/kondavarshith1">
                     Twitter <span>  /  </span>
                    </a>
                    
                    <a href="https://www.linkedin.com/in/konda-varshith-5388a2116/">
                     linkedin
                    </a>

                </SocialCont> 
                </HeadingElements>                         
                 
            </HeadingWrapCont>
    
        )
}
export default HeadingWrap;

