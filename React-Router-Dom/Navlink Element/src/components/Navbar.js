import { NavLink, Outlet } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3176/3176363.png"
          alt="logo"
          onClick={() => window.location.replace("/")}
        />

        <nav>
          {/* use NavNavLink inplace of NavLink to set the style to the active NavLinks */}
          <NavLink to="/" style={({ isActive }) => isActive ? { border: '2px solid #fff', backgroundColor: '#e1d1f976' } : undefined} >Home</NavLink>
          <NavLink to="/list" style={({ isActive }) => isActive ? { border: '2px solid #fff', backgroundColor: '#e1d1f976' } : undefined} >List</NavLink>
          <NavLink to="/contact" style={({ isActive }) => isActive ? { border: '2px solid #fff', backgroundColor: '#e1d1f976' } : undefined} >Contact</NavLink>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};
