import React, { useContext } from "react";
import styles from "../styles/ItemCard.module.css";
import { itemContext } from "../itemContext";
// import { totalContext } from "../totalContext";

function ItemCard({ id, name, price }) {
  const { total, setTotal, setItem, handleAdd } = useContext(itemContext);
  // const {  } = useContext(totalContext);

  const handleRemove = () => {
    if (total <= 0) {
      return;
    }
    setTotal((prevState) => prevState - price);
    setItem((prevState) => prevState - 1);
  };

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
        <button className={styles.itemButton} onClick={() => handleRemove()}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
