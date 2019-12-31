import React from "react";
import Matter from "matter-js";

import { GameEngine } from "react-game-engine";

class Engine extends React.Component {
  constructor() {
    this.engine = Matter.Engine.create();
  }

  render() {
    return <GameEngine />;
  }
}

export default Engine;
