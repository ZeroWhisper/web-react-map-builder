import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    display: flex;
    flex: 1;
    height: 100%;
  }

  a, u {
    text-decoration: none;
  }

  .flexFull {
    display: flex;
    width: 100%;
    height: 100%;
  }

  /* Change the white to any color ;) */
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  /* input:-webkit-autofill:active  {
      -webkit-box-shadow: 0 0 0 30px #1daa6a inset !important;
  } */

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Open Sans Condensed', sans-serif;
  }

  button, input[type="submit"], input[type="reset"] {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  .nonecss {
    border: none;
    background-image: none;
    background-color: transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }

  @font-face {
    font-family: AntDesign;
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/AntDesign.ttf') format("truetype");
  }

  @font-face {
    font-family: Entypo;
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/Entypo.ttf') format("truetype");
  }

  @font-face {
    font-family: EvilIcons;
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/EvilIcons.ttf') format("truetype");
  }

  @font-face {
    font-family: Feather;
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/Feather.ttf') format("truetype");
  }

  @font-face {
    font-family: FontAwesome;
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/FontAwesome.ttf') format("truetype");
  }

  @font-face {
    font-family: FontAwesome5;
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/FontAwesome5.ttf') format("truetype");
  }

  @font-face {
    font-family: FontAwesome5Brands;
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/FontAwesome5_Brands.ttf') format("truetype");
  }

  @font-face {
    font-family: Foundation;
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/Foundation.ttf') format("truetype");
  }

  @font-face {
    font-family: Ionicons;
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/Ionicons.ttf') format("truetype");
  }

  @font-face {
    font-family: MaterialCommunityIcons;
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/MaterialCommunityIcons.ttf') format("truetype");
  }

  @font-face {
    font-family: MaterialIcons;
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/MaterialIcons.ttf') format("truetype");
  }

  @font-face {
    font-family: Octicons;
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/Octicons.ttf') format("truetype");
  }

  @font-face {
    font-family: SimpleLineIcons;
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/SimpleLineIcons.ttf') format("truetype");
  }

  @font-face {
    font-family: Zocial;
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/Zocial.ttf') format("truetype");
  }

  @font-face {
    font-family: "VisbyRoundCF-Bold";
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/VisbyRoundCF-Bold.ttf') format("truetype");
  }

  @font-face {
    font-family: "VisbyRoundCF-Medium";
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/VisbyRoundCF-Medium.ttf') format("truetype");
  }

  @font-face {
    font-family: "VisbyRoundCF-Regular";
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/VisbyRoundCF-Regular.ttf') format("truetype");
  }
`;

export default GlobalStyle;
