import {createGlobalStyle} from 'styled-components';


const BodyTheme = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');

    body{
        background-color : ${props => props.theme.backgroundColor};
        overflow-x:hidden;
        
    } `
    ;

export default BodyTheme