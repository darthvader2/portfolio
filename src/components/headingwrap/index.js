import React from 'react';
import {Container} from '../container/container'
import {HeadingElements,HeadingMain } from './styles';
import {HeadingWrapCont,SocialCont,Social,HeadingIntro} from './styles';


function HeadingWrap(){
    return(
        <Container>
            <HeadingWrapCont>
                <HeadingMain>Varshith.</HeadingMain>

                
        <HeadingIntro>
            Student, Web - developer <br/>
            and data <span> analyst <br/>     
            based in linköping. </span>
            </HeadingIntro>
        
                             
                <HeadingElements>
                 

                <SocialCont>
                    <a href = "https://github.com/darthvader2"> 
                        <Social className = 'git'></Social> 
                    </a>
                    
                    <a href ="https://twitter.com/kondavarshith1">
                        <Social className = "twitter"></Social>
                    </a>
                    <a href="https://www.linkedin.com/in/konda-varshith-5388a2116/">
                        <Social className = 'linkedin'></Social>
                    </a>
                </SocialCont> 
                </HeadingElements>                         
                 
            </HeadingWrapCont>
        </Container>
    
        )
}
export default HeadingWrap;

