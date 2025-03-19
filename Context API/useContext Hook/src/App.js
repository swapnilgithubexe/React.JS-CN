import { useState } from "react";
import { Card } from "./Card";
import { cardContext } from "./context";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");
  const [color, setColor] = useState("");

  return (
    <div className="App">
      <form>
        <textarea
          placeholder="What's on your mind?"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <input
          placeholder="Background Color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </form>
      <cardContext.Provider value={{ text, color }}>
        <Card />
      </cardContext.Provider>
    </div>
  );
}
