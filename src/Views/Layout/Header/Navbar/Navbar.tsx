import { Link } from "react-router-dom";
import { Nav, NavLi, NavList } from "./Navbar.style";

function Navbar() {
  return (
    <Nav>
      <NavList>
        <NavLi>
          <Link to="/home">Home</Link>
        </NavLi>
        <NavLi>
          <Link to="/register">register</Link>
        </NavLi>
        <NavLi>
          <Link to="/detail">detail</Link>
        </NavLi>
        <NavLi>
          <Link to="/login">Login</Link>
        </NavLi>
        {/* <NavLi>
          <Link to="/invoices">Invoices</Link>
        </NavLi>
        <NavLi>
          <Link to="/expense">Expenses</Link>
        </NavLi> */}
      </NavList>
    </Nav>
  );
}

export default Navbar;
