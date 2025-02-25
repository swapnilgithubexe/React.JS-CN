import { Component } from "react";

class ComponentA extends Component {
  constructor() {
    super();
    this.state = {
      name: "ComponentA"
    }
  }
  render() {
    return (
      <h1>ComponentA</h1>
    );
  }
}

export default ComponentA;