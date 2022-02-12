import { Link } from 'react-router-dom';
import { Nav, NavLi, NavList } from './Navbar.style';

function Navbar() {
  return (
    <Nav>
      <NavList>
        <NavLi>
          <Link to="/">홈</Link>
        </NavLi>
        <NavLi>
          <Link to="/register">등록하기</Link>
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
