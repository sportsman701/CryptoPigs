import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @font-face {
    font-family: "Chango-Regular";
    src: url(fonts/Chango-Regular.ttf);
  }

  body,
  #root {
    font-family: "Chango-Regular";
  }
`;
