import { Component } from "react";

class ComponentB extends Component {
  constructor() {
    super();
    this.state = {
      name: "ComponentB"
    }
  }
  render() {
    return (
      <h1>ComponentB</h1>
    );
  }
}

export default ComponentB;