import styled from "styled-components";

export const SCategoryHeader = styled.h3`
    //margin: 1rem 0 0.5rem;
    text-transform: capitalize;
    //background-color: yellow;
    margin: 0 0.25rem;
    /*transform: scale(0.1);
    &:hover{
        transition-property: transform;
        transition-duration: 2s;
        //transition-delay: 0.1s; 
        transition-timing-function: ease;
        transform: scale(1);
    }*/

`

export const SCategoryContainer = styled.div`
   // grid-column: span 5;
    margin: 0 auto;
    display: grid;
    gap: ${({theme}) => theme.gap};
    //background-color: green;
    
    @media(min-width: ${({theme}) => theme.size.tablet}) {
        //grid-column: span 4;
        //width: 80%;
    }

    @media(min-width: ${({theme}) => theme.size.desktop}) {
        
    }
`
export const SCategoryThumb = styled.article`
    background-color: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.secondary};
    //border-top: 1px solid ${({theme}) => theme.colors.secondary};
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow: hidden;
    aspect-ratio: 4 / 1;
    box-shadow: ${({theme}) => theme.shadow};
    //background-color: blue;
    margin: 0 0.25rem;
   // border-radius: ${({theme}) => theme.borderEdges};

    &:hover {
        opacity: 0.9;
        
    }

    @media(min-width: ${({theme}) => theme.size.tablet}) {
        
    }
`



export const SCategoryThumbImage = styled.img`
    width: 30%;
    height: 100%;
    object-fit: cover;
    
`
export const SCategoryThumbBody = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    @media(min-width: ${({theme}) => theme.size.tablet}) {
        display: block;
        padding: 0.5rem;
    }
    @media(min-width: ${({theme}) => theme.size.desktop}) {
        padding: 1rem;
    }
`

export const SCategoryText = styled.p`
    display: none;
    @media(min-width: ${({theme}) => theme.size.tablet}) {
        display: block;
        margin-top: 0.5rem;
        text-align: justify;
        font-weight: bold;
    }
    
`

/*
export const SCategoryThumbImage = styled.img`
    width: 30%;
    height: 100%;
    object-fit: cover;
    
`
export const SCategoryThumbBody = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    @media(min-width: ${({theme}) => theme.size.tablet}) {
        //display: block;
        padding: 1rem;
        flex-direction: column;
        justify-content: center;

    }
    @media(min-width: ${({theme}) => theme.size.desktop}) {
        padding: 2rem;
    }
`

export const SCategoryText = styled.p`
    display: none;
    @media(min-width: ${({theme}) => theme.size.tablet}) {
        display: block;
        margin-top: 1rem;
        text-align: justify;
        font-weight: bold;
        flex-grow: 1;
    }
    @media(min-width: ${({theme}) => theme.size.tablet}) {
        
        margin-top: 2rem;
        
    }
    
`
*/