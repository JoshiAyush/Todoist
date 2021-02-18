/**
 * @file src/global-styles.js creates global styles for our app basically it is a kind of CSS reset that we are putting on our app,
 * we first take the 'createGlobalStyle' component from 'styled-components' and using that we create a custom component for Global 
 * styles then we export that component to src/index.js file which applies this component on top of the app. 
 */

/** Importing createGlobalStyle component. */
import { createGlobalStyle } from 'styled-components';

/** Creating custom GlobalStyles component using the built-in component. */
export const GlobalStyles = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
        color: #333333;
        font-size: 16px;
        background-color: white;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-family: 'Robot', sans-serif;
        box-sizing: border-box;
    }
`;
