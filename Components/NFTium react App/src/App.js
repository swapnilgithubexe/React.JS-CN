import "./styles.css";
import Hero from "./Hero.js";
import Navbar from "./Navbar.js";
import About from "./About.js";

export default function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}
