import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
        color: #333333;
        font-size: 16px;
        background-color: white;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }
`;