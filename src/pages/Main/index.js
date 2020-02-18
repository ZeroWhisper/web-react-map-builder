import React from "react";
import ReactDOM from "react-dom";
// import { Container } from "react-nes-component";
import Matter from "matter-js";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    var Engine = Matter.Engine,
      Render = Matter.Render,
      World = Matter.World,
      Bodies = Matter.Bodies,
      Mouse = Matter.Mouse,
      MouseConstraint = Matter.MouseConstraint;

    var engine = Engine.create({
      // positionIterations: 20
    });

    var render = Render.create({
      element: this.refs.scene,
      engine: engine,
      options: {
        width: 480,
        height: 720,
        wireframes: false
      }
    });

    var ballA = Bodies.circle(210, 100, 30, { restitution: 0.5 });
    var ballB = Bodies.circle(110, 50, 30, { restitution: 0.5 });
    World.add(engine.world, [
      // walls
      Bodies.rectangle(200, 0, 520, 50, { isStatic: true }), // top
      Bodies.rectangle(200, 720, 600, 50, { isStatic: true }), // bot
      Bodies.rectangle(470, 350, 25, 720, { isStatic: true }), // rig
      Bodies.rectangle(0, 350, 50, 720, { isStatic: true }) // lef
    ]);

    World.add(engine.world, [ballA, ballB]);

    // add mouse control
    var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false
          }
        }
      });

    World.add(engine.world, mouseConstraint);

    Matter.Events.on(mouseConstraint, "mousedown", function(event) {
      World.add(engine.world, Bodies.circle(150, 50, 30, { restitution: 0.7 }));
    });

    Engine.run(engine);

    Render.run(render);
  }

  render() {
    return <div ref="scene" />;
  }
}

export default Main;

// import React, { useEffect } from "react";
// import Matter from "matter-js";
// import { Button, Container } from "react-nes-component";

// import AppContainer from "~/components/AppContainer";
// import AppHeader from "~/components/AppHeader";
// import AppBody from "~/components/AppBody";

// const Main = props => {
//   // const [a, b] = useEffect(() => {}, []);

//   return (
//     <AppContainer>
//       {/* <AppHeader>
//         <Container>HEADER</Container>
//       </AppHeader> */}
//       <AppBody>
//         <Container>
//           <Button>TESTE</Button>
//         </Container>
//       </AppBody>
//     </AppContainer>
//   );
// };

// export default Main;
