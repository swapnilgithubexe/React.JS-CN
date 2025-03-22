import { useContext } from "react";
import styles from "../styles/CartModal.module.css";
import { itemContext } from "../itemContext";

function CartModal() {
  const { toggle, cart, onClear } = useContext(itemContext);

  return (
    <div className={styles.cartModal}>
      <div onClick={() => toggle()} className={styles.closeButton}>
        Close
      </div>

      <div onClick={() => onClear()} className={styles.clearButton}>
        Clear
      </div>

      <div className={styles.itemContainer}>
        {cart.map((item) => {
          return (
            <div className={styles.cartCard} key={item.id}>
              <h1>{item.name}</h1>
              <h3>X {item.quantity}</h3>
              <h3>X {item.quantity * item.price}</h3>
            </div>
          );
        })}
      </div>

      <div className={styles.total}>
        <div className={styles.totalText}>Total</div>
        <div className={styles.totalPrice}>
          {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
        </div>
      </div>
    </div>
  );
}

export default CartModal;
