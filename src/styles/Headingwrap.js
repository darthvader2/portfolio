import styled from 'styled-components';
import React from 'react';
import {Container} from '../components/container';


export const HeadingWrapCont = styled.div`
place-items :center;
display:grid;
animation-name: fadeIn;
    animation-duration:4s ;
    @keyframes fadeIn{
        from{
            opacity: 0;
            transform: translateY(100px);
        }
        to{
            opacity: 1;

        }
    }
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
    
`;




function HeadingWrap(){
    return(
        <Container>
            <HeadingWrapCont>
                <HeadingMain>Varshith.</HeadingMain>

                
        <HeadingIntro>
            Student, Web - developer  and data  analyst <br/>     
            based in linköping.
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
        </Container>
    
        )
}
export default HeadingWrap;

