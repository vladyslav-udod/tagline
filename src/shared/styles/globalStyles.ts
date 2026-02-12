import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font-family: ${theme.fonts.primary}, system-ui, -apple-system, sans-serif;
    font-size: ${theme.fontSizes.medium};
    font-weight: ${theme.fontWeights.normal};
    color: ${theme.colors.white};
    background-color: ${theme.colors.background};
    -webkit-font-smoothing: antialiased;
  }

  h1 {
    line-height: 1.2;
    font-size:  4rem;
  }

  h2 {
    font-size:  3rem;
  }

  h3 {
    font-size:  38px;
    line-height: 1.4;
    letter-spacing: -0.0044em;
    font-weight: ${theme.fontWeights.medium};
  }

  h5 {
    font-size:  1rem;
    line-height: 1.5;
    letter-spacing: 0;
    font-weight: ${theme.fontWeights.bold};
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  
  p {
    line-height: 1.5;
    line-height: 1.4;
    letter-spacing: -0.0044em;
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }
`;
