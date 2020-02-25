import React from 'react';
import {Container} from '../container/container'
import {HeadingElements,HeadingMain } from './styles';
import {HeadingWrapCont,Line,SocialCont,Social} from './styles';


function HeadingWrap(){
    return(
        <Container>
            <HeadingWrapCont>
                <HeadingElements>
                <Line/>
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
                        
                <HeadingMain>
                
                Hi There ,I'm Varshith. <br/>
                Software <span>Engineer</span>,<br/>
                Free lancer and Data Enthusiast.

                </HeadingMain>
            </HeadingWrapCont>
        </Container>
    
        )
}
export default HeadingWrap;

