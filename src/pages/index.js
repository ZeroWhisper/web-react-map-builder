import React, { Component } from "react";

import Simple from "./Simple";
import Welcome from "./Welcome";

import AppContainer from "~/components/AppContainer";

import GlobalStyle from "~/styles/global";

class Main extends Component {
  render() {
    return (
      <AppContainer>
        <GlobalStyle />
        <Simple />
      </AppContainer>
    );
  }
}

export default Main;
