import styled from "styled-components";

export const SCategoryHeader = styled.h3`
    text-transform: capitalize;
    margin: 0 0.5rem;
    color: ${({theme}) => theme.colors.secondary};
`

export const SCategoryContainer = styled.div`
    margin: 0 auto;
    display: grid;
    gap: ${({theme}) => theme.gap};
    
    @media(min-width: ${({theme}) => theme.size.tablet}) {

    }

    @media(min-width: ${({theme}) => theme.size.desktop}) {
        
    }
    
`
export const SCategoryThumb = styled.article`
    background-color: ${({theme}) => theme.colors.primary};
    
    //border-top: 1px solid ${({theme}) => theme.colors.secondary};
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow: hidden;
    aspect-ratio: 4 / 1;
    box-shadow: ${({theme}) => theme.shadow};
    //background-color: blue;
    margin: 0 0.5rem;
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
    position: relative;
    @media(min-width: ${({theme}) => theme.size.tablet}) {
        display: block;
        padding: 0.5rem;
    }
    @media(min-width: ${({theme}) => theme.size.desktop}) {
        padding: 1rem;
    }
    span {
        position: absolute;
        bottom: 0.25rem;
        right: 0.25rem;
        font-size: 0.75rem;
    }
    
`

export const SCategoryText = styled.p`
    display: none;

    @media(min-width: ${({theme}) => theme.size.tablet}) {
        color: ${({theme}) => theme.colors.secondary};
        display: block;
        margin-top: 0.5rem;
        text-align: justify;
        font-weight: bold;
    }
    
    
`

