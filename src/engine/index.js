import React from "react";
import Matter from "matter-js";

import { GameEngine } from "react-game-engine";

class Engine extends React.Component {
  constructor() {
    super();
    this.game = null;
    this.entities = this.start();
  }

  start = () => {
    let engine = Matter.Engine.create({ enableSleeping: false });
    let world = engine.world;

    let actor = Matter.Bodies.rectangle(200, 200, 50, 50);

    Matter.World.add(world, [actor]);

    return {
      physics: { engine, world },
      actor: { body: actor, size: [50, 50], color: "red", renderer: null }
    };
  };

  render() {
    return <GameEngine ref={"canvas"} entities={this.entities} />;
  }
}

export default Engine;
