import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
	  margin: 0;
	  padding: 0;
	  outline: 0;
	  box-sizing: border-box;
  }

  body {
	-webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }
`;

export default GlobalStyle;
