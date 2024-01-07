import styled from "styled-components";

export const SOuterContainer = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    overflow: hidden;
    

`

export const SInnerContainer = styled.div`// SAME AS SPage
    max-width: 80rem;
    padding: 1rem 0 0;
    overflow-y: scroll;
    scrollbar-width: none;
    /* scroll-snap-type: x mandatory; */
`

export const SThumbRowWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(20, 1fr);
    grid-template-rows: repeat(1, 1fr);
    gap: ${({theme}) => theme.gap};
    margin: 0.25rem;
    aspect-ratio: 40/1.2;
    
    @media(min-width: ${({theme}) => theme.size.tablet}) {
        
    }

    @media(min-width: ${({theme}) => theme.size.desktop}) {

    }
    a{
        min-height: 100%;
        max-height: 100%;
    }
`

export const SThumbRowScroll = styled.div`
    width: 2000%;
    /* transition-property: transform;
    transition-duration: 0.5s;
    //transition-delay: 0.1s; 
    transition-timing-function: ease;
    transform: translateX(${(props) => props.position}); */
    
 
    @media(min-width: ${({theme}) => theme.size.tablet}) {
        width: 1000%;
        
    }

    @media(min-width: ${({theme}) => theme.size.desktop}) {
        width: 666%;
    }
`

export const SScrollButton = styled.div`
    display: none;

    @media(min-width: ${({theme}) => theme.size.desktop}) {
      display: block;
      color: ${({theme}) => theme.colors.secondary};
      //margin: 1rem;
      align-self: center;
      transform: scale(2.5);
      //border-radius: 50%;
      cursor: pointer;
      overflow: hidden;
      clear: right;

     
    }
    
`
export const SButtonLeft = styled.span`
        margin: 1rem;
        float: right;    
`
export const SButtonRight = styled.span`
        margin: 1rem;
`

export const SThumbBoxMain = styled.article`
    //grid-column: span 1;
    background-color: ${({theme}) => theme.colors.primary};
    border-radius: ${({theme}) => theme.borderEdges};
    overflow: hidden;
    box-shadow: ${({theme}) => theme.shadow};
    position: relative;
    height: 100%;
    /* scroll-snap-align: start;
    scroll-margin: 0.25rem; */

    &:hover {
        opacity: 0.8;
        //scale: 1.01;
    }

    @media(min-width: ${({theme}) => theme.size.tablet}) { 
        
    }

    
`

export const SThumbImageMain = styled.img`
    width: 100%;
    height: 80%;
    object-fit: cover;
`

export const SThumbTextMain = styled.div`
    align-items: flex-start;
    padding-top: 0.5rem;
    width: 100%;
    height: 20%;
    position: relative;
    span {
      position: absolute;
        bottom: 0.15rem;
        right: 0.15rem;
        font-size: 0.7rem;

      @media(min-width: ${({theme}) => theme.size.desktop}) {
        position: absolute;
        bottom: 0.25rem;
        right: 0.25rem;
        /* font-size: 0.7rem; */
      }
        
    }
`

export const SThumbTitle = styled.h4`//CHANGE
    text-align: center;
    margin: 0 auto;
    color: ${({theme}) => theme.colors.secondary};

    
    @media(min-width: ${({theme}) => theme.size.tablet}) {

    }
`
export const SAround = styled.div`
    
`