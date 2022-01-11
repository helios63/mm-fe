import styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #110346;
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    line-height: 1.2;
    color: #E9FC9E;
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
  }

  @font-face {
    font-family: 'Neptun-NordMedium':
    src: local('Neptun-NordMedium'),
         url('./assets/Neptun-NordMedium.woff2') format('woff2'),
         url('./assets/Neptun-NordMedium.ttf') format('truetype');
  }

  a {
    text-decoration: none;
  }

  .showMenu {
    transform: translateY(0);
  }
`

export const H1 = styled.h1`
  font-size: 36px;
  font-family: 'Neptun-NordMedium', sans-serif;
  color: #E9FC9E;
  font-weight: 300;
  line-height: 1;
  letter-spacing: .2pt;
`

export const H2 = styled.h2`
  font-size: 36px;
  font-family: 'Neptun-NordMedium', sans-serif;
  color: #E9FC9E;
  font-weight: 300;
  line-height: 1;
  letter-spacing: .2pt;
  padding-bottom: 8px;
  margin: 0;
  border-bottom: 5px solid #E9FC9E;
  mix-blend-mode: difference;
`

export const P = styled.p`
  padding: 8px 0;
`

export default GlobalStyle
