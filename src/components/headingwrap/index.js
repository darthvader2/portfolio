import React from 'react';
import {Container} from '../container/container'
import {HeadingElements,HeadingMain } from './styles';
import Heading from '../heading-style'
import {HeadingWrapCont,Line} from './styles';


function HeadingWrap(){
    return(
        <Container>
            <HeadingWrapCont>
                <HeadingElements>
                </HeadingElements>
                        
                <HeadingMain>
                <Line></Line>
                Hi There ,I'm Varshith. <br/>
                Software <span>Engineer</span>,<br/>
                Free lancer and Data Enthusiast

                </HeadingMain>
            </HeadingWrapCont>
        </Container>
    
        )
}
export default HeadingWrap;

