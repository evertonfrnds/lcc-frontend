import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #121214;
  }

  *, button, input {
    border: 0;
    outline: 0;

    font-family: 'Roboto', sans-serif;
  }

  .switch {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .container {
    width: 100%;
    max-width: 1226px;;
    
    padding: 48px;
  }
`;
