import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import "./header.css";

export const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="logo" className="logo" />
        <span>Shopping Cart</span>
      </Link>

      <nav className="navigation">
        <NavLink to="/" className="link">
          Home
        </NavLink>

        <NavLink to="/cart" className="link">
          Cart
        </NavLink>
      </nav>

      <Link to="/cart" className="items">
        <span>Cart: 2 </span>
      </Link>
    </header>
  );
};
