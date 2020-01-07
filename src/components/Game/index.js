import React, { Component } from "react";
import { Loop, Stage, World } from "react-game-kit";
import Matter from "matter-js";

import Actor from "~/components/Actor";

// import styles from './style';

class Game extends Component {
  physicsInit(engine) {
    const ground = Matter.Bodies.rectangle(512 * 3, 448, 1024 * 3, 64, {
      isStatic: true
    });

    const leftWall = Matter.Bodies.rectangle(-64, 288, 64, 576, {
      isStatic: true
    });

    const rightWall = Matter.Bodies.rectangle(3008, 288, 64, 576, {
      isStatic: true
    });

    Matter.World.addBody(engine.world, ground);
    Matter.World.addBody(engine.world, leftWall);
    Matter.World.addBody(engine.world, rightWall);
  }

  render() {
    return (
      <Loop>
        <Stage>
          <World onInit={this.physicsInit}>
            <Actor />
          </World>
        </Stage>
      </Loop>
    );
  }
}

export default Game;
