import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme.ts";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        margin: 0;
        min-width: 360px;
        font-family: "Open Sans", sans-serif;
        font-weight: 400;
        font-size: 12px;
        line-height: 1.2;
        background-color: ${theme.colors.grey.light};
    }
    
    a {
        font: inherit;
        text-decoration: none;
        cursor: pointer;
    }
    
    button {
        font: inherit;
        border: none;
        background-color: ${theme.colors.bgBlock};
        color: ${theme.colors.font};
        cursor: pointer;
    }
    
    ul {
        list-style-type: none;
    }
`;