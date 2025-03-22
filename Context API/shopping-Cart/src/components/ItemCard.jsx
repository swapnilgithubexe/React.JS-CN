import React, { useContext } from "react";
import styles from "../styles/ItemCard.module.css";
import { itemContext } from "../itemContext";
// import { totalContext } from "../totalContext";

function ItemCard({ id, name, price }) {
  const { handleRemove, handleAdd } = useContext(itemContext);
  // const {  } = useContext(totalContext);

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}>&#x20B9; {price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button
          className={styles.itemButton}
          onClick={() => handleAdd({ id, name, price })}
        >
          Add
        </button>
        <button
          className={styles.itemButton}
          onClick={() => handleRemove({ id, price })}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
