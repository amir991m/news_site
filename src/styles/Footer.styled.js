import styled from "styled-components"

export const SFooter = styled.footer`
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    justify-content: center;
    align-items: center;
    max-width: 80rem;
    height: 4rem;
    margin: 0 auto;
    padding: 0.5rem;
    @media(min-width: ${({theme}) => theme.size.tablet}) {
        gap: 1rem;
    }
`

export const SFooterContainerRight = styled.div`
    display: block;
    grid-column: span 4 / 8;
    margin: auto 0;

    @media(min-width: ${({theme}) => theme.size.tablet}) {  
        grid-column: span 2;
    }
    i {
        margin: 1rem;
    }
`

export const SList = styled.ul`
        grid-column: span 10;
        display: flex;
        justify-content: space-between;
        gap: 0.2rem;
        font-size: 0.75rem;
        margin: 0 1em;
    a {
        color: ${({theme}) => theme.colors.secondary};
        font-weight: bold;       
    }

    @media(min-width: ${({theme}) => theme.size.tablet}) {
        gap: 0.75rem;
        font-size: 1rem;
        grid-column: span 8;
    }
`