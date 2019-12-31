import React, { Component } from "react";

import { Container } from "./style";

// import GlobalStyle from "~/styles/global";

class AppContainer extends Component {
  render() {
    return <Container>{this.props.children}</Container>;
  }
}

export default AppContainer;
