import { createGlobalStyle } from 'styled-components';
import * as variables from '../ui/styles/variables';

export const GlobalStyle = createGlobalStyle`
  *::before, 
  *::after,
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body { 
    background-color: ${variables.WHITE_LIGHT};
  }

  body, button {
    font-family: 'Montserrat', sans-serif; 
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
