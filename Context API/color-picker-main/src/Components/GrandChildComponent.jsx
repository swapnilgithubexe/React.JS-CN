import { useContext } from "react";
import { colorContext } from "../context";

const GrandChildComponent = (props) => {
  const color = useContext(colorContext);

  return <p style={{ color: color }}>Color: {props.color}</p>;
};

export default GrandChildComponent;
