import styled from "styled-components";

export const STitle = styled.h3`//CHANGE možda obrisati sve
    text-align: center;
    margin: 0 auto;
    color: ${({theme}) => theme.colors.secondary};
    //flex-grow: 1;
    
   
    //background-color: red;

    
    @media(min-width: ${({theme}) => theme.size.tablet}) {
        //margin: 0.5rem; //vidjeti
        //width: 80%
    }
`

export const STitleS = styled.h4`
    text-align: center;
    margin: 0 auto;
    color: ${({theme}) => theme.colors.secondary};
`