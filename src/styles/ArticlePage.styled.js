import styled from "styled-components";

export const SArticlePage = styled.div`
    max-width: 80rem;
    margin: 0.5rem auto 0;
    background-color: ${({theme}) => theme.colors.primary};
    
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    padding-bottom: 1rem;
    box-shadow: ${({theme}) => theme.shadow};
`
export const SArticleTitle = styled.h1`
    //background-color: green;
    grid-column: span 10;
    margin: 1rem;
    padding: 1rem;
    border-bottom: 1px solid ${({theme}) => theme.colors.secondary};
    color: ${({theme}) => theme.colors.secondary};
`

export const SArticleContainerLeft = styled.div`
    display: none;

    @media(min-width: ${({theme}) => theme.size.tablet}) {
        display: block;
        grid-column: span 2;
        position: sticky;
        align-self: start;
        top: 4rem;
    }
    i {
        margin: 1rem;
    }
    
`

export const SArticleContainerMain = styled.div`
    grid-column: span 10;
    border-left: 1px solid ${({theme}) => theme.colors.secondary};
    border-right: 1px solid ${({theme}) => theme.colors.secondary};
    @media(min-width: ${({theme}) => theme.size.tablet}) {
        grid-column: span 8;
    }
    @media(min-width: ${({theme}) => theme.size.desktop}) {
        grid-column: span 5;
    }
    
`

export const SArticleContainerRight = styled.div`

    display: none;
    @media(min-width: ${({theme}) => theme.size.desktop}) {
        grid-column: span 3;
        //margin: 0 auto;
        display: grid;
        gap: ${({theme}) => theme.gap};
        padding: 0 0.5rem;
        position: sticky;
        align-self: start;
        top: 4.5rem;
    }
    p {
        display: none;
    }
    
    

`

export const SArticleImage = styled.img`
    max-width: 100%;
    //height: auto;
    margin: 0 auto;
    padding: 0 1rem;
    

`

export const SArticleText = styled.p`
    text-align: justify;
    padding: 1rem;
    color: ${({theme}) => theme.colors.secondary};
`