import "./styles.css";
import { ButtonView } from "./ButtonVariants.styled.js";

export default function App() {
  return (
    <div className="App">
      <h3>Button Variants</h3>
      <div>
        <h3>Outlined Button</h3>
        <ButtonView>Outlined</ButtonView>
      </div>
      <div>
        <h3>Filled Button</h3>
        <ButtonView filled bg="cyan" color="red">
          Filled
        </ButtonView>
      </div>
    </div>
  );
}
