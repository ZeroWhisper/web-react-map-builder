import React, { Component } from "react";

import Welcome from "./Welcome";

import GlobalStyle from "~/styles/global";

class Main extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Welcome />
      </>
    );
  }
}

export default Main;
