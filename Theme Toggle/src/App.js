import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = { theme: "light" };
  }

  // create handler function here
  changeColor = () => {
    this.setState((prevState) => ({
      theme: prevState.theme === "light" ? "dark" : "light"
    }))
  }

  render() {
    return (
      // Add dynamic className to the div
      <div className={this.state.theme}>
        {/* Add the button element here */}
        <button onClick={this.changeColor}>{`${this.state.theme === "light" ? "dark" : "light"} Theme`}</button>
        <h2>Why We Explore - NASA</h2>
        <img
          src="https://res.cloudinary.com/dl26pbek4/image/upload/v1671686299/launch-pad-67650_1920_p6izup.jpg"
          alt="space shuttle"
        />
        <p>
          Humans are driven to explore the unknown, discover new worlds, push
          the boundaries of our scientific and technical limits, and then push
          further. The intangible desire to explore and challenge the boundaries
          of what we know and where we have been has provided benefits to our
          society for centuries.
        </p>
      </div>
    );
  }
}

export default App;
