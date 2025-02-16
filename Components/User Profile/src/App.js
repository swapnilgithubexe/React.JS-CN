import "./styles.css";
import { Component } from "react";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
// Use Hero, Skills and About component to display your information
class App extends Component {
  render() {
    return (
      <>
        {/* render your component here  */}
        <Hero />
        <Skills />
        <About />
      </>

    )
  }
}
export default App