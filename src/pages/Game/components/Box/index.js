import React, { Component } from 'react';
import Matter from 'matter-js';

export function setWorld(world) {
  const initial = Matter.Bodies.rectangle(50, 50, 50, 50);

  Matter.World.add(world, [initial]);

  return initial;
}

export default class Box extends Component {
  render() {
    const width = this.props.size[0];
    const height = this.props.size[1];
    const x = this.props.body.position.x;
    const y = this.props.body.position.y;
    // const x = this.props.body.position.x - width / 2;
    // const y = this.props.body.position.y - height / 2;

    // console.log(this.props);

    return (
      <div
        style={{
          position: 'absolute',
          left: x,
          top: y,
          width: width,
          height: height,
          backgroundColor: this.props.color || 'pink',
        }}
      />
    );
  }
}
