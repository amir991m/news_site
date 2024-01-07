import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    background-color: ${({theme}) => theme.colors.background};
    
    font-family: sans-serif;
}

img {
    display: block;
}

a {
        text-decoration: none;
        color: inherit;
    }

`

export default GlobalStyles