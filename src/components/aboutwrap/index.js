import React from 'react';
import {Container} from '../container/container';
import {AboutWrapCont,AboutText,AboutHeading,AboutContent} from './styles';
import cv from '../../documents/Varshith_CV.pdf'
function AboutWrap(){    
    return(
    
    <AboutWrapCont>
        <AboutContent>
        <AboutHeading>
            Hi,there
        </AboutHeading>
        <AboutText>
        <p>I am urrently pursuing master's in statistics and machine learning  at <br/>
        Linkoping university in sweden,even though currently pursuing field of <br/>
        data analytics ,I like keep myself busy with web development projects<br/>
        i posess a couple of skills which can be useful to you ,I didn't list<br/>
        them here,as they are too boring to be on my portfolio,but if you are<br/>
        curious you can have a look at my <a href = {cv} target = "_blank">CV</a></p>
        </AboutText>
         

        </AboutContent>

    </AboutWrapCont>
        

    
)
    };

export default AboutWrap;