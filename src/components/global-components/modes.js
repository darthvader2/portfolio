import {createGlobalStyle} from 'styled-components';


const BodyTheme = createGlobalStyle`
    body{
        background-color : ${props => props.theme.backgroundColor};
        overflow-x:hidden;
        
    } `
    ;

export default BodyTheme