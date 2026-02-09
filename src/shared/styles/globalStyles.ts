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
    // DM Sans is used as a substitute for Circular Std
    font-family: "DM Sans", system-ui, -apple-system, sans-serif;
    font-size: ${theme.fontSizes.medium};
    color: ${theme.colors.white};
    background-color: ${theme.colors.background};
    -webkit-font-smoothing: antialiased;
  }

  h1 {
    font-weight: 600;
    line-height: 1.2;
    font-size:  4rem;
  }

  h2 {
    font-size:  3rem;
    font-weight: 450;
  }

  h3 {
    font-size:  2.5rem;
    font-weight: 450;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  
  p {
    line-height: 1.5;
    font-size: ${theme.fontSizes.small};
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }
`;
