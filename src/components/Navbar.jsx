import { NavLink } from "react-router-dom";

function Navbar() {
  const toggleStyles = (navInfo) => {
    return navInfo.isActive === true ? activeStyles : inActiveStyles;
  };

  const activeStyles = {
    textDecoration: "underline",
  };

  const inActiveStyles = {
    textDecoration: "none",
  };

  return (
    <nav>
      <NavLink to="/" style={toggleStyles}>Home</NavLink>
      <NavLink to="/todo" end={true} style={toggleStyles}>Ver Lista</NavLink>
    </nav>
  );
}

export default Navbar;
