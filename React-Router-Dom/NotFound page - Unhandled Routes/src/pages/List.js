import { Link } from "react-router-dom";
import { items } from "../data";

export const List = () => {
  return (
    <div className="list page">
      <h3>List page</h3>
      <div className="item-list">
        {items.map((i) => (
          <div className="item" key={i.id}>
            <Link to={`${i.id}`}>
              <h3>{i.name}</h3>
            </Link>
            <img src={i.image} alt={i.name} />
          </div>
        ))}
      </div>
    </div>
  );
};
