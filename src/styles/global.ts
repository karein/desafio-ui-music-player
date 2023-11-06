import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    @media(max-width: 1080px){ 
      font-size: 93.75%; 
    }

    @media(max-width: 720px){
      font-size: 87.5%;
    }

    body{
      color: #E1E1E6;
      /* position: relative; */
      background-color: #0F0D13;
      font-smooth: antialiased;
    }

    body, button{
    font-family: 'Roboto', sans-serif ;
    font-weight: 400;
  }
  }
`;