import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .logo {
    margin-top: 2rem;
  }
`;

export default GlobalStyle;
