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
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
