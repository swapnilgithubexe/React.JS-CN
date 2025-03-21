import React, { useContext } from "react";
import styles from "../styles/Navbar.module.css";
import { itemContext } from "../itemContext";
// import { totalContext } from "../totalContext";

function Navbar() {
  const { item, total, setItem, setTotal } = useContext(itemContext);

  const handleReset = () => {
    setTotal(0);
    setItem(0);
  };
  // const {  } = useContext(totalContext);
  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>
      <div className={styles.buttonsWrapper}>
        <button onClick={() => handleReset()} className={styles.button}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Navbar;
