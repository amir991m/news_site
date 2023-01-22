import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    height: 4rem;
    background-color: ${({theme}) => theme.colors.primary};
    //margin: 0.5rem 0;
    position: sticky;
    top: 0;
    z-index: 1;
    box-shadow: ${({theme}) => theme.shadow};
    //display: none;
`
export const Container = styled.div`
    display: flex;
    align-items: center;
    max-width: 80rem;
    height: 100%;
    margin: 0 auto;
    //background-color: orange;
    padding: 0 1rem;
`

export const Logo = styled.img`
    width: 200px;
    margin: 0 auto;
    //background-color: bisque;
`

export const CategoryList = styled.ul`
    //flex-basis: 800px;
    
    display: none;
    
    //background-color: blue;
    a {
        width: 100%;
        height: 100%;
    }

    @media(min-width: ${({theme}) => theme.size.tablet}) {
        display: grid;
        grid-auto-flow: column;
        flex-grow: 1;
        align-items: center;
        justify-content: space-evenly;
        //gap: 1rem;
        height: 100%;
        grid-template-columns: repeat(6, 1fr);

    }
`

export const CategoryItem = styled.li`
    //margin: 1rem;
    //background-color: lightcyan;
    color: ${({theme}) => theme.colors.secondary};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-weight: bold;
    
    &:hover{
        background-color: ${({theme}) => theme.colors.secondary};
        color: ${({theme}) => theme.colors.primary};
        
    }
    
  
 
    //flex-grow: 1;
`