import styled from "styled-components";

export const SContainer = styled.div`
    max-width: 80rem;
    padding: 1rem 0 0;
    //background-color: ${({theme}) => theme.colors.primary};
    margin: 0 auto;
    //overflow-y: hidden;
    scrollbar-width: none;

`

export const SThumbRow = styled.div`
    margin: 0.25rem;
    display: grid;
    gap: ${({theme}) => theme.gap};
     
    @media(min-width: ${({theme}) => theme.size.tablet}) {
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(1, 1fr);
        aspect-ratio: 4/1.2;
        //margin: 0.5rem 0.25rem 1rem;
    }

    @media(min-width: ${({theme}) => theme.size.desktop}) {
        grid-template-columns: repeat(6, 1fr);
        aspect-ratio: 6/1.2;
    }
    a{
        min-height: 100%;
        max-height: 100%;
    }
    //transform: translate(-100%);
    
    /*
    &:hover{
        transition-property: transform;
    transition-duration: 1s;
    //transition-delay: 0.1s; 
    transition-timing-function: ease;
    transform: translate(0%);
    }*/
    
   
`


export const SThumbBoxSec = styled.article`
    background-color: ${({theme}) => theme.colors.primary};
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow: hidden;
    aspect-ratio: 4 / 1;
    box-shadow: ${({theme}) => theme.shadow};
    position: relative;

    /*&:hover{
        transition-property: transform;
    transition-duration: 1s;
    //transition-delay: 0.1s; 
    transition-timing-function: ease;
    transform: skew(1.2);
    }*/
    &:hover {
        
        opacity: 0.8;
        //scale: 1.01;
    }

    @media(min-width: ${({theme}) => theme.size.tablet}) {
        aspect-ratio: auto;
        flex-direction: column;
        align-items: left;
        border-radius: ${({theme}) => theme.borderEdges}; //2% 15% 2% 15%;
        height:100%;
        //aspect-ratio: 5 / 6;
    }

    
`

export const SSideMenuContainer = styled.div`
    background-color: ${({theme}) => theme.colors.primary};
    display: none;

    @media(min-width: ${({theme}) => theme.size.desktop}) {
        display: flex;
        flex-direction: column;
        grid-column: span 2;
        //background-color: azure;
        align-content: space-around;
        overflow-y: scroll;
        scrollbar-width: none;
        box-shadow: ${({theme}) => theme.shadow};
        border-radius: ${({theme}) => theme.borderEdges};
        a {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 33.33%;
            max-height: 33.33%;
            //aspect-ratio: 5/1;
            //flex: 1;
            border-top: 1px solid black;
            width: 100%;
            margin: 0 auto;
            &:nth-child(1)
            {
                border-top: none;
            }
            &:hover {
                opacity: 0.8;
                //scale: 1.01;
            }
        }
        
    }
`

export const SSideMenuItem = styled.div`
   
            display: flex;
            height: 100%;
            
          
`

export const SThumbImageSec = styled.img`
    width: 30%;
    height: 100%;
    object-fit: cover;

    @media(min-width: ${({theme}) => theme.size.tablet}) {
        width: 100%;
        height: 60%;
        object-fit: cover;
    }
`

export const SThumbImageSide = styled.img`
    width: 30%;
    height: 100%;
    object-fit: cover;
    
`


export const SThumbTextSec = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;

    @media(min-width: ${({theme}) => theme.size.tablet}) {
        align-items: flex-start;
        padding-top: 0.5rem;
        width: 100%;
        height: 40%;
        flex-direction: column;
        //object-fit: cover;
    }
    span {
        position: absolute;
        bottom: 0.25rem;
        right: 0.25rem;
        font-size: 0.75rem;
    }
`
export const SThumbTextSide = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    

    
`

export const SThumbTitle = styled.h4`//CHANGE
    text-align: center;
    margin: 0 auto;
    color: ${({theme}) => theme.colors.secondary};

    
    @media(min-width: ${({theme}) => theme.size.tablet}) {
        //margin: 0.5rem; //vidjeti
        //width: 80%
    }
`

