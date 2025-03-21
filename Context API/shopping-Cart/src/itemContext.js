import { createContext, useState } from "react";
import CartModal from "./components/CartModal"


export const itemContext = createContext();


const CustomItemContext = ({ children }) => {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  const [showCart, setShowCart] = useState(false);

  const toggle = () => {
    setShowCart(!showCart)
  }

  const handleReset = () => {
    setTotal(0);
    setItem(0);
  };

  return (
    <itemContext.Provider value={{ total, setTotal, item, setItem, toggle, handleReset }}>
      {showCart && <CartModal />}
      {children}
    </itemContext.Provider>
  )
}

export default CustomItemContext;
