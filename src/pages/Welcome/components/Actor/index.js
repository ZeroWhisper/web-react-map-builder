import React, { Component } from "react";

import { Content } from "./style";

class Actor extends Component {
  state = {
    x: 50,
    y: 50
  };

  handleKeyPress = e => {
    e.preventDefault();

    const { x, y } = this.state;

    switch (e.keyCode) {
      case 37:
        this.setState({ x: x - 50 });
        console.tron.log("WEST");
        break;
      case 38:
        this.setState({ y: y - 50 });
        console.tron.log("NORTH");
        break;
      case 39:
        this.setState({ x: x + 50 });
        console.tron.log("EAST");
        break;
      case 40:
        this.setState({ y: y + 50 });
        console.tron.log("SOUTH");
        break;

      default:
        break;
    }
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyPress);
  }

  render() {
    return <Content {...this.state} />;
  }
}

export default Actor;
