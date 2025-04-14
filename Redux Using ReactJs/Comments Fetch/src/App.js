import "./styles.css";
import { Provider } from "react-redux";
import { store } from "./store";

// components imports
import { Navbar } from "./components/Navbar";

// pages imports
import { Home } from "./pages/Home";

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
        <Home />
      </Provider>
    </div>
  );
}
