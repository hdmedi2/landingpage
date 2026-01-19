import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px; /* 기본 폰트 크기 명시 */
    -webkit-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    text-size-adjust: 100%;
  }

  body {
    font-family: ${props => props.theme.fonts.primary};
    font-size: 16px; /* 기본 폰트 크기 명시 */
    line-height: 1.5; /* 기본 line-height 명시 */
    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.background};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
  }

  button {
    font-family: ${props => props.theme.fonts.primary};
    cursor: pointer;
    border: none;
    outline: none;
  }

  input {
    font-family: ${props => props.theme.fonts.primary};
    outline: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;
