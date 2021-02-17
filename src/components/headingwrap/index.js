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

