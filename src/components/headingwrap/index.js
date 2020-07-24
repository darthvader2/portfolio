import React from 'react';
import {Container} from '../container/container'
import {HeadingElements,HeadingMain } from './styles';
import {HeadingWrapCont,SocialCont,Social,CodeSection} from './styles';


function HeadingWrap(){
    return(
        <Container>
            <HeadingWrapCont>
                <HeadingMain>Varshith.</HeadingMain>
                             
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

