import { NavLink, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="nav">

        <NavLink to="/" style={({ isActive }) => isActive ? { color: 'blue' } : undefined}>
          <h4>HOME</h4>

        </NavLink>
        <NavLink to="/about" style={({ isActive }) => isActive ? { color: 'blue' } : undefined}>
          <h4>ABOUT</h4>

        </NavLink>
        <NavLink to="/items" style={({ isActive }) => isActive ? { color: 'blue' } : undefined}>        <h4>ITEMS</h4>
        </NavLink>

      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
