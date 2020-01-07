import React, { Component } from "react";

import Game from "~/components/Game";

import { Container, Content, Box } from "./style";

// const Item = props => {
//   return <Box />;
// };

class Simple extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Game />
        </Content>
      </Container>
    );
  }
}

export default Simple;
