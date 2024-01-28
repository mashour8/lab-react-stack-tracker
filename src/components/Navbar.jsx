import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav className="Navbar">
      StackTracker
      <ul>
        <NavLink to={"/"}>Home</NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
