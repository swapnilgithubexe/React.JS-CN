import { Link } from "react-router-dom";
import { Home } from "../pages/Home";
import { Contact } from "../pages/Contact"
import { List } from "../pages/List"

export const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3176/3176363.png"
          alt="logo"
          onClick={() => window.location.replace("/")}
        />

        <nav>{/* create nav links here */}
          <Link to="/" element={<Home />} >Home</Link>
          <Link to="/list" element={<List />}>List</Link>
          <Link to="/contact" element={<Contact />}>Contact</Link>
        </nav>
      </div>
    </div>
  );
};
