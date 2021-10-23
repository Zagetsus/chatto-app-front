import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;

    width: 100%;
    height: 100%;

  }
  
  *, button, input{
    border: 0;
    background: 0;
    font-family: var(--nunito)
  }
  
  button:focus {
    outline: none;
  }

  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0;
  }

  ul,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  img {
    display: block;
    max-width: 100%;
  }

  :root {
    --container: 1280px;

    --nunito: 'Nunito';
    --montserrat: 'Montserrat';
    --roboto: 'Roboto';

    --primary: #00A7B1;
    
    --grey-dark: #090909;
    --grey: #5F5F5F;
    --grey-light: #E6E8EF;
    
    --success: #287D3C;
    --success-light: #EDF9F0;
    
    --warning: #B95000;
    --warning-light: #FFF4EC;
    
    --error: #DA1414;
    --error-light: #FEEFEF;
    
    --info: #2E5AAC;
    --info-light: #EEF2FA;
    
    --white: #FFF;
    --black: #000;
    
    @media(max-width:  1280px){
      --container: 608px;
    }

    @media(max-width: 607px){
      --container: 90%;
    }
  }
`;
