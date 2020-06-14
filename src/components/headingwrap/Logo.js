import React from 'react'
import styled from 'styled-components/macro'
import Logosvg from '../../images/logo-design.svg'

const LogoImg =styled.div`
    position : relative;
    background-image : url(${Logosvg});
    background-repeat :no-repeat;
    height :50px;
    width:500px;
    padding:0;
    margin-left: 5%;
    margin-top:50px;
    `;

function Logo(){
    return(
        <LogoImg/>
    )
}
export default Logo