import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }
  a {
    text-decoration: none;
    color: black;
  }
  .logo {
    margin-top: 2rem;
  }
  .btn {
    transition: opacity 200ms ease-in-out;
    &:hover {
      opacity: 0.7;
      cursor: pointer;
    }
  }
`;

export default GlobalStyle;
