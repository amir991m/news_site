import styled from "styled-components";


export const SAddPostForm = styled.form`
    max-width: 80rem;
    padding: 1rem 0.5rem;
    margin: 0 auto;
    label {
        //width: 100%;
        color: ${({theme}) => theme.colors.secondary};
        font-weight: bold;
        //margin: 0.5rem;
    }
    input[type=text], textarea, select {
        width: 100%;
        padding: 0.5rem;
        margin: 0.5rem 0;
        color: ${({theme}) => theme.colors.secondary};
        //box-shadow: ${({theme}) => theme.shadow};
    }
    textarea {
        height: 20rem;
    }
   
    button {
        padding: 0.5rem;
        margin: 0.5rem 0;
        width: 8rem;
        //border: none;
        background-color: ${({theme}) => theme.colors.secondary};
        border-color: ${({theme}) => theme.colors.secondary};
        color: ${({theme}) => theme.colors.primary}; 
        border-radius: 4px;
        //box-shadow: ${({theme}) => theme.shadow};
        cursor: pointer;
        //border-radius: ${({theme}) => theme.borderEdges};

        &:hover{
            background-color: ${({theme}) => theme.colors.primary};
            border-color: ${({theme}) => theme.colors.primary};
            color: ${({theme}) => theme.colors.secondary}; 
        }

        &:disabled{
            background-color: ${({theme}) => theme.colors.secondary};
            border-color: ${({theme}) => theme.colors.secondary};
            color: ${({theme}) => theme.colors.primary}; 
            opacity: 0.6;
            cursor: default;
        }
    }

    input[type=file] {
        padding: 0.5rem;
        margin: 0.5rem;
        
    }

`