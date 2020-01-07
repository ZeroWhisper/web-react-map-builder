import React, { Component } from "react";
import { Loop, Stage, World, Body } from "react-game-kit";

import AppContainer from "~/components/AppContainer";
import Actor from "./components/Actor";

import { Container } from "./style";

import GameEngine from "~/engine";

class Welcome extends Component {
  render() {
    return (
      <AppContainer>
        <Container>
          <Loop>
            <Stage style={{ background: "#3a9bdc" }} width={1024} height={576}>
              <World
                gravity={{
                  x: 0,
                  y: 1,
                  scale: 0.001
                }}
              >
                <Actor />
              </World>
            </Stage>
          </Loop>
        </Container>
      </AppContainer>
    );
  }
}

export default Welcome;
