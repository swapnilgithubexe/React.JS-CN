import { Navbar } from "../components/Navbar";
import { items } from "../data";

export const List = () => {
  return (
    <>
      <Navbar />
      <div className="list page">
        <h3>List page</h3>
        <div className="item-list">
          {items.map((i) => (
            <div className="item" key={i.id}>
              <h3>{i.name}</h3>
              <img src={i.image} alt={i.name} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
