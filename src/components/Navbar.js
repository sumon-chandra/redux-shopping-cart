import React from "react";
import { useSelector } from "react-redux";
import { FiShoppingCart } from "react-icons/fi";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  const items = useSelector((state) => state.cart);
  console.log(items);
  return (
    <>
      <div className="navbar-container">
        <div className="logo">
          <h1>Logo</h1>
        </div>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cart">
                {" "}
                <FiShoppingCart />{" "}
                <span className="toolkit">{items.length}</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
