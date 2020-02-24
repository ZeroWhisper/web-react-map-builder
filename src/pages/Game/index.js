import React, { Component } from 'react';
import { GameEngine } from 'react-game-engine';
import Matter from 'matter-js';

import Box, { setWorld } from './components/Box';

const Physics = (entities, { time }) => {
  let engine = entities['physics'].engine;
  Matter.Engine.update(engine, time.delta);
  return entities;
};

const engine = Matter.Engine.create({ enableSleeping: false });
const world = engine.world;

class Game extends Component {
  render() {
    return (
      <GameEngine
        style={{ width: 800, height: 600, backgroundColor: 'blue' }}
        systems={[Physics]}
        entities={{
          physics: { engine, world },
          initialBox: {
            body: setWorld(world),
            size: [50, 50],
            color: 'red',
            renderer: Box,
          },
        }}></GameEngine>
    );
  }
}

export default Game;
// import React from 'react';
// import GameEngine from 'react-game-engine';

// // import styles from './style';

// const Game = props => {
//   return (
//     <GameEngine
//       style={{ width: 800, height: 600, backgroundColor: 'blue' }}
//       systems={[]}
//       // entities={{
//       //   //-- Notice that each entity has a unique id (required)
//       //   //-- and a renderer property (optional). If no renderer
//       //   //-- is supplied with the entity - it won't get displayed.
//       //   box1: { x: 200,  y: 200, renderer: <Box />}
//       // }}
//     ></GameEngine>
//   );
// };

// export default Game;
