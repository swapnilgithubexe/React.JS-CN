import { useContext } from "react";
import styles from "../styles/CartModal.module.css";
import { itemContext } from "../itemContext";

function CartModal() {
  const { toggle, handleReset } = useContext(itemContext);
  const onClear = () => {
    handleReset();
    toggle();
  };
  return (
    <div className={styles.cartModal}>
      <div onClick={() => toggle()} className={styles.closeButton}>
        Close
      </div>

      <div onClick={() => onClear()} className={styles.clearButton}>
        Clear
      </div>

      <div className={styles.itemContainer}></div>

      <div className={styles.total}>
        <div className={styles.totalText}>Total</div>
        <div className={styles.totalPrice}>Price</div>
      </div>
    </div>
  );
}

export default CartModal;
