import { useContext } from "react";
import { cardContext } from "./context";
//Refactor this to use the useContext hook
export const Card = () => {
  const value = useContext(cardContext);
  return (
    <cardContext.Provider value={value}>

      return (
      <div className="card" style={{ backgroundColor: value.color }}>
        <h3>{value.text}</h3>
      </div>
      );

    </cardContext.Provider>
  );
};
