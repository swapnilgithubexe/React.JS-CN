import "./styles.css";
import { Buttons } from "./components/Buttons";
import { Timer } from "./components/Timer";
import { store } from "./store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <div className="App">
      <h1>Simple Timer</h1>
      <Provider store={store}>
        <Timer />
        <Buttons />
      </Provider>
    </div>
  );
}
