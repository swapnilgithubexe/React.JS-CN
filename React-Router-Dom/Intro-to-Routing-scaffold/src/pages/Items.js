import { Link } from "react-router-dom";
import { ITEMS } from "../data/itemData";

function Items() {
  return (
    <>
      <main>
        <h1>Items Page</h1>

        {ITEMS.map((item) => {
          return (
            <>
              <Link key={item.id} to={`${item.id}`}>
                <h4>{item.title}</h4></Link>

            </>
          )
        })}
      </main>
    </>
  );
}

export default Items;
