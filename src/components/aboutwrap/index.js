import React from 'react';
import {Container} from '../container/container';
import {AboutWrapCont,AboutText,AboutHeading,AboutContent,GifDiv} from './styles';
import cv from '../../documents/Varshith_CV.pdf'
import gif from '../../images/cat.gif';

function AboutWrap(){    
    return(
        
    <AboutWrapCont>
        
        <AboutContent>
        
        <AboutHeading>
        <GifDiv></GifDiv>
        </AboutHeading>
        <AboutText>
        <p>I am currently pursuing master's in statistics and machine learning  at 
        Linkoping university in sweden,even though currently pursuing field of
        data analytics ,I like to keep myself busy with web development projects.</p>
        </AboutText>
         

        </AboutContent>

    </AboutWrapCont>
        

    
)
    };

export default AboutWrap;