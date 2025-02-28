import React from "react";

export default class Name extends React.Component {
  constructor() {
    super();
    this.state = {
      fullName: "Coding Ninjas",
      curIndex: 0,
      currentName: ""
    };
    this.id = null
  }

  // This function adds a character to the string.


  // Required lifecycle methods here
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.showName !== this.props.showName) {
      if (this.props.showName) {
        this.startTyping();
      }
      else {
        this.stopTyping();
      }
    }
  }
  componentWillUnmount() {
    this.stopTyping()
  }

  startTyping = () => {
    if (this.id) return;

    this.id = setInterval(() => {
      this.setState((prevState) => {
        if (prevState.curIndex >= prevState.fullName.length) {
          clearInterval(this.id);
          return prevState;
        }
        return {
          curIndex: prevState.curIndex + 1,
          currentName: prevState.fullName.substring(0, prevState.curIndex + 1)
        };
      });
    }, 500)
  }

  stopTyping = () => {
    if (this.id) {
      clearInterval(this.id);
      this.id = null;
    }
  }

  render() {
    return <h1>{this.state.currentName}</h1>;
  }
}
