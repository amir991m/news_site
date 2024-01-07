import styled, {keyframes} from "styled-components"

const showMenu = keyframes`
    0% {
        transform: scaleY(0);
    }
    80% {
        transform: scaleY(1.2);
    }
    100% {
        transform: scaleY(1);
    }
`


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
    display: grid;
    //background-color: red;


    grid-template-areas: 
        'logo logo logo theme'
        'category category category category'
        //'category'
        ;

    
    align-items: center;
    max-width: 80rem;
    height: 100%;
    margin: 0 auto;
    //justify-content: space-between;

    @media(min-width: ${({theme}) => theme.size.tablet}) {
        grid-template-areas: 
        'logo category category category theme'
        //'category'
        ;
        align-items: normal;
    @media(min-width: ${({theme}) => theme.size.desktop}) {
        justify-content: space-between;
    }
    

    }


    //background-color: orange;
    //padding: 0 1rem;
    
`


// export const Logo = styled.p`
//     width: 12rem;
//     margin: 0 0.5rem;
//     color: ${({theme}) => theme.colors.secondary};
//     font-stretch: ultra-expanded;
    
// `

export const SLogoLine = styled.section`
    padding: 0.25rem 0.5rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    grid-area: logo;

    @media(min-width: ${({theme}) => theme.size.desktop}) {
        justify-content: space-between;
        align-items: center;
    }
    

`
export const Logo = styled.img`
    width: 16rem;
    margin: 0 0.5rem;
    //background-color: bisque;
   // color: red;
`



export const SMenuButton = styled.button`
    background-color: transparent;
    border: none;
    /* width: 3rem;
    height: 3rem; */
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items:  center;
    position: relative;
    cursor: pointer;
    @media(min-width: ${({theme}) => theme.size.desktop}) {
        display: none;
       

    }
    
    
    
`


export const SMenuIcon = styled.div`
        
    &, &:before, &:after {
        background-color: ${({theme}) => theme.colors.secondary};
        /* width: 2.5rem;
        height: 0.4rem; */
        width: 40px;
        height: 4.8px;
        border-radius: 0.25rem;
        position: absolute;
        transition: all 0.5s;
  }
  &:before, &:after {
    content: "";
  }
  &:before {
    transform: translate(-20px, -12px);
  
    
   
  }
  &:after {
    transform: translate(-20px, 12px);
    
  }
  
`
export const SNavigation = styled.nav`
    display: ${({theme}) => theme.menu};;
    transform-origin: top center;
    animation: ${showMenu} 0.5s ease-in-out forwards;
    max-height: 100%;
    width: 100%;
    grid-area: category;
    background-color: yellow;
    /* ${SLogoLine}:active ~ & {
        display: block;
    } */
    @media(min-width: ${({theme}) => theme.size.tablet}) {
        display: block;
        animation: none;
        height: 4rem;

    }

    
    
    
`




export const CategoryList = styled.ul`
    //flex-basis: 800px;
    
    /* display: none; */
    list-style-type: none;
    display: flex;
    flex-flow: column nowrap;
    background-color: blue;
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
    background-color: lightcyan;
    padding: 0.5rem;
    border-top: 1px solid black;
    color: ${({theme}) => theme.colors.secondary};
    background-color: ${({theme}) => theme.colors.primary};
    font-weight: bold;
    opacity: 0.9;
    text-align: center;


    &:hover, &:focus{
        background-color: ${({theme}) => theme.colors.secondary};
        color: ${({theme}) => theme.colors.primary};
    } 

    @media (min-width: ${({theme}) => theme.size.tablet})  {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        opacity: 1;
        border: none;
        
    }
    
    //flex-grow: 1;
`

export const SThemeSwitch = styled.span`
    margin: 1.5rem;
    padding-top: 0.25rem;
    color: ${({theme}) => theme.colors.secondary};
    transform: scale(1.4);
    grid-area: theme;
    &:hover{
        cursor: pointer;
    }
    
`