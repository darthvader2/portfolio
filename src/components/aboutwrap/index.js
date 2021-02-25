import React from 'react';
import {Container} from '../container/container';
import {AboutWrapCont,AboutText,AboutHeading,AboutContent} from './styles';
function AboutWrap(){    
    return(
    
    <AboutWrapCont>
        <AboutContent>
        <AboutHeading>
            Hi,there
        </AboutHeading>
        <AboutText>
        Currently pursuing master's in statistics and machine learning  at <br/>
        Linkoping university in sweden,even though currently pursuing field of <br/>
        data analytics ,i like keep myself busy with web technologies always.<br/>
        </AboutText>
         

        </AboutContent>

    </AboutWrapCont>
        

    
)
    };

export default AboutWrap;