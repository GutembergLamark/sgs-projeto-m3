import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    ul,ol{
        list-style: none;
    }
    button{
        cursor:pointer;
    }
    :root{
        --blue: #077E8E;
        --grey:  #D9D9D9;
    };
`