import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *::before, 
  *::after,
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
