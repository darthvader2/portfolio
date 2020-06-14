import {createGlobalStyle} from 'styled-components';
 

const BodyTheme = createGlobalStyle`
    body{
        background-color : ${props => props.theme.backgroundColor};
    } `
    ;

export default BodyTheme