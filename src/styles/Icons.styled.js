import styled from "styled-components";

export const SSocialIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2.5%;
    
    li {
        list-style: none;
        flex-grow: 1;
        aspect-ratio: 1 / 1;
        margin: 1.5%;
    }

    a {
        
        border: 1px solid ${({theme}) => theme.colors.secondary};
        border-radius: 50%;
        background-color: ${({theme}) => theme.colors.secondary};
        color: ${({theme}) => theme.colors.primary};
        display: inline-flex;
        align-items: center;
        justify-content: center;
        //margin-right: 10px;
        height: 100%;
        width: 100%;
        text-decoration: none;
        //font-size: large;
    }
`

export const CategoryIcon = styled.span`
    position: absolute;
    align-self: start;
    left: 0.5rem;
    top: 0.5rem;
    color: ${({theme}) => theme.colors.primary};
`
    