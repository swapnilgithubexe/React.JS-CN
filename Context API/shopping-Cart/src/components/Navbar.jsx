import React, { useContext } from "react";
import styles from "../styles/Total.module.css";
import { itemContext } from "../itemContext";
import { totalContext } from "../totalContext";

function Navbar() {
  const { item, total } = useContext(itemContext);
  // const {  } = useContext(totalContext);
  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>
    </div>
  );
}

export default Navbar;
