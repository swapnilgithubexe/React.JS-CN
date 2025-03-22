import { createContext, useState } from "react";
import CartModal from "./components/CartModal"


export const itemContext = createContext();


const CustomItemContext = ({ children }) => {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);

  const toggle = () => {
    setShowCart(!showCart)
  }

  const onClear = () => {
    handleReset();
    toggle();
  };

  const handleRemove = ({ id, price }) => {
    if (total <= 0) {
      return;
    }
    const index = cart.findIndex((item) => item.id === id);
    if (index === -1) return;

    const updatedCart = [...cart];

    if (updatedCart[index].quantity > 1) {
      updatedCart[index] = { ...updatedCart[index], quantity: updatedCart[index].quantity - 1 }
    }
    else {
      updatedCart.splice(index, 1);
    }

    setCart(updatedCart);
    setTotal((prev) => prev - price)
    setItem((prev) => prev - 1)
  };

  const handleAdd = ({ id, name, price }) => {
    const index = cart.findIndex((item) => item.id === id)

    if (index === -1) {
      setCart([...cart, { id, name, price, quantity: 1 }])
      setTotal(total + price);
    } else {
      const updatedCart = cart.map((item) =>
        id === item.id ? { ...item, quantity: item.quantity + 1 } : item
      )

      setCart(updatedCart);
      setTotal(total + price)

    }
    setItem(item + 1)
  };

  const handleReset = () => {
    setTotal(0);
    setItem(0);
  };

  return (
    <itemContext.Provider value={{ total, setTotal, item, setItem, toggle, handleReset, handleAdd, cart, handleRemove, onClear }}>
      {showCart && <CartModal />}
      {children}
    </itemContext.Provider>
  )
}

export default CustomItemContext;
